const inputValue = document.getElementById('form');
const divContainer = document.getElementById('details');

const loadData = () => {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=18300b80024bf2e7f2aeb194f9f07826`)
    .then(res => res.json())
    .then(data => displayData(data));
    
    
}

// loadData();

const displayData = (data) => {
    if(data.message === 'city not found'){
        divContainer.innerHTML= `
        <h2>${data.message}</h2>
        `
        inputValue.value='';
    }
   
  else {
    divContainer.textContent= '';
    const div = document.createElement('div');
    div.innerHTML=`
    <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'></img>
    <h1>${data.name}</h1>
    <h3><span>${parseInt(data.main.temp-273.15)}</span>&deg;C</h3>
    <h1 class="lead">${data.weather[0].description}</h1>
    `;
    divContainer.appendChild(div);
    
    
    inputValue.value='';
  }

  
    
   
   
}

