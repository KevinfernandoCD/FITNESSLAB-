
export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2d7d6c775amsh5a3ca1352e1f75ep1ac8a9jsn733d36266201',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const fetchData = async(url,options) => {

    const response  = await fetch(url,options)

    const data = await response.json()

    return data

}


