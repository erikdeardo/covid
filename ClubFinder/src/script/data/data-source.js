class DataSource {
    static searchClub(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}/confirmed`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson && responseJson.length!=0) {
                console.log(responseJson);
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`Tidak dapat menemukan Negara : ${keyword}`);
            }
        })
    }
 }
  
 export default DataSource;