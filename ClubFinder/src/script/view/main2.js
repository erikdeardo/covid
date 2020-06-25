const main2 = () => {
    
    document.getElementById('getCovid').addEventListener('click', getCovid);
function getCovid(){
    
    fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
    .then((res) => res.json())
    .then((prov) => {
        let output = '<h2>Data COVID-19 Di   Indonesia</h2>';
        console.log(prov.data);
        prov.data.forEach(function(post){
          output += `
          <div>
            <table>
           <thead>
               <tr>
                   <th>Provinsi</th>
                   <th>Kasus Positif</th>
                   <th>Sembuh</th>
                   <th>Meninggal</th>
               </tr>
           </thead>
           <td> ${post.provinsi}</td>
           <td> ${post.kasusPosi}</td>
           <td> ${post.kasusSemb}</td>
           <td> ${post.kasusMeni}</td>       
       </table>
        </div>
          `;
        });    
        document.getElementById('output').innerHTML = output;
    })
    }
};

export default main2;
    