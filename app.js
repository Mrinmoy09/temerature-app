const inputValue = document.getElementById('form');

const loadData = () => {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=18300b80024bf2e7f2aeb194f9f07826`)
    .then(res => res.json())
    .then(data => displayData(data));
}

// loadData();

const displayData = (data) => {
   const divContainer = document.getElementById('details');
   divContainer.textContent= '';
   const div = document.createElement('div');
   div.innerHTML=`
   <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg' alt=""></img>
   <h1>${data.name}</h1>
   <h3><span>${parseInt(data.main.temp-273.15)}</span>&deg;C</h3>
   <h1 class="lead">${data.weather[0].description}</h1>
   `;
   divContainer.appendChild(div);
   inputValue.value='';
   console.log(data);
}

