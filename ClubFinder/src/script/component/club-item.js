class ClubItem extends HTMLElement {
    set club(club) {
        this._club = club;
        this.innerHTML +=`<h2>Kasus COVID-19 Negara di Dunia</h2>`;
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div >
        <table>
           <thead>
               <tr>
                   <th>Negara</th>
                   <th>Region</th>
                   <th>Positif</th>
                   <th>Sembuh</th>
                   <th>Meninggal</th>
                   <!--<th>Kasus Aktif</th>-->
               </tr>
           </thead>
           <td> ${this._club.countryRegion}</td>
           <td> ${this._club.provinceState}</td>
           <td> ${this._club.confirmed}</td>
           <td> ${this._club.recovered}</td>
           <td> ${this._club.deaths}</td>
           <!--<td> ${this._club.active}</td>-->
           
       </table>
        </div>`;
    }
 }
  
 customElements.define("club-item", ClubItem);