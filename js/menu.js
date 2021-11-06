const restourant = 'food-band';


const renderItem = (data)=>{
    let array = [];
     data.forEach(elem=>{
        array.push(elem);
        console.log(elem);
     });

}


fetch(`https://food-519ce-default-rtdb.firebaseio.com/db/food-band.json`) //получаем данные из файла
    .then((response)=>response.json()) //переводим их в формат json 
    .then((data)=>{
        renderItem(data)
    })
    .catch((err)=>{ 
        alert('Извините, сервер временно недоступен');  
    })
