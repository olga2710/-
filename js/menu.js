const restourant = 'food-band';
const cardsMenu = document.querySelector('.cards-menu');

const changeTitle = (restaurant) =>{
    const restaurantTitle = document.querySelector('.restaurant-title');
    const rating = document.querySelector('.rating');
    const price = document.querySelector('.price');
    const category = document.querySelector('.category');

    restaurantTitle.textContent = restaurant.name;
    rating.textContent = restaurant.stars;
    price.innerHTML = `От ${restaurant.price} ₽`;
    category.textContent =restaurant.kitchen;


}



const renderItem = (data)=>{
     data.forEach(({id, name, description, price, image})=>{
        const card =   document.createElement('div');
        card.classList.add('card');
        card.dataset.id = id;

        card.innerHTML = `
            <img src="${image}" alt="${name}" class="card-image" />
			<div class="card-text">
				<div class="card-heading">
					<h3 class="card-title card-title-reg">${name}</h3>
				</div>
				<!-- /.card-heading -->
				<div class="card-info">
					<div class="ingredients">
                    ${description}
					</div>
				</div>
				<!-- /.card-info -->
				<div class="card-buttons">
					<button class="button button-primary button-add-cart">
						<span class="button-card-text">В корзину</span>
						<span class="button-cart-svg"></span>
					</button>
					<strong class="card-price-bold">${price} ₽</strong>
				</div>
			</div>
			<!-- /.card-text -->
        
        
        `;

        cardsMenu.append(card);
     });

}

if (localStorage.getItem('restaurant')){
    const restaurant= JSON.parse(localStorage.getItem('restaurant'));

    changeTitle(restaurant);

    fetch(`https://food-519ce-default-rtdb.firebaseio.com/db/${restaurant.products}`) //получаем данные из файла
    .then((response)=>response.json()) //переводим их в формат json 
    .then((data)=>{
        renderItem(data)
    })
    .catch((err)=>{ 
        alert('Извините, сервер временно недоступен');  
    })

}

