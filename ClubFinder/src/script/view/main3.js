
function getCovid1(){
    fetch('https://covid19.mathdro.id/api')
        .then((res) => res.json())
        .then((responseJson) => {
            console.log(responseJson.confirmed.value);
            responseJson;
            let output = `
                <table border="1">
                    <tr>
                        <th>Terkonfirmasi</th>
                        <td>${responseJson.confirmed.value}</td>
                    </tr>
                    <tr>
                        <th>Sembuh</th>
                        <td>${responseJson.recovered.value}</td>
                    </tr>
                    <tr>
                        <th>Meninggal</th>
                        <td>${responseJson.deaths.value}</td>
                    </tr>
                    <tr>
                        <th>Update Terakhir</th>
                        <td>${responseJson.lastUpdate}</td>
                    </tr>

                </table>
            `;
            
            document.getElementById('output1').innerHTML = output;
        })
    }
    export default getCovid1;