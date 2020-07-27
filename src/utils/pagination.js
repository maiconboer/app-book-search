
function pagination(totalBooks, maxResults) {
  const state = {
    page: 1,
    perPage: maxResults,
    totalPage: Math.ceil(totalBooks / maxResults),
    maxVisibleButtons: 5,
  }

  const html = {
    get(element) {
      return document.querySelector(element);
    }
  }

  const controls = {
    next() {
      state.page++;

      const lastPage = state.page > state.totalPage
      if(lastPage) {
        state.page--;
      }
    },

    prev() {
      state.page--;

      if(state.page < 1) {
        state.page++
      }
    },

    goTo(page) {

      if(page < 1) {
        page = 1;
      }

      state.page = page;

      if(page > state.totalPage) {
        state.page = state.totalPage;
      }
    },

    createListeners() {
      html.get('.first').addEventListener('click', () => {
        controls.goTo(1);
        update();
      })

      html.get('.last').addEventListener('click', () => {
        controls.goTo(state.totalPage);
        update();
      })

      html.get('.next').addEventListener('click', () => {
        controls.next();
        update();
      })

      html.get('.prev').addEventListener('click', () => {
        controls.prev();
        update();
      })
    }
  }

  // TRABALHANDO NA PAGINAÇÃO
  const buttons = {
    create(number) {
      const button = document.createElement('div');
      button.classList.add('page-number');
      button.innerHTML = number;

      button.onclick = function(event) {
        localStorage.setItem('currentPage', event.target.textContent)

        window.addEventListener('storage', function(e) {  
          console.log(e.oldValue);
         });
        
      }    

      html.get('.controls .numbers').appendChild(button);
    },

    update() {
      html.get('.controls .numbers').innerHTML = '';
      const { maxLeft, maxRight } = buttons.calculateMaxVisible();

      for(let page = maxLeft; page <= maxRight; page++) {
        buttons.create(page)
      }
    },

    calculateMaxVisible() {
      const { maxVisibleButtons } = state;
      let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2));
      let maxRight = (state.page + Math.floor(maxVisibleButtons / 2));
      
      if(maxLeft < 1) {
        maxLeft = 1;
        maxRight = maxVisibleButtons;
      }

      if(maxRight > state.totalPage) {
        maxLeft = state.totalPage - ( maxVisibleButtons - 1);
        maxRight = state.totalPage;
      
        if(maxLeft < 1) maxLeft = 1

      }

      return { maxLeft, maxRight }
    }
  }

  function update() {
    buttons.update();
  }

  function init() {
    update();
    controls.createListeners();
  }

  init();
}

export default pagination;