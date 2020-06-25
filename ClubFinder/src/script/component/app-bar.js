class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `<header>
        <div class="jumbotron">
           <h1>COVID-19 DATA SEARCH</h1>
        </div>
           <nav>
              <ul>
                 <li><a href="covid.html">COVID-19</a></li>
                 <li><a href="index.html">Data COVID-19 Negara</a></li>
                 <li><a href="index2.html">COVID-19 Indonesia</a></li>
              </ul>
           </nav>
      </header>`;
    }
 }
  
 customElements.define("app-bar", AppBar);