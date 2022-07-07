// https://restcountries.com/v3.1/name/{name}

function printCountry(country){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    xhr.send();

    xhr.addEventListener('load', function(){
        let [data] = JSON.parse(xhr.responseText);
        console.log(data);

        let templete =
        `<div class="container" >
        <!-- image -->
        <div id="flag" > <img src="${data.flags.png}" alt=""> </div>

        <!-- data -->
        <div id="text-data" >
            <p>Name : <span>${data.name.common}</span></p>
            <p>Capital : <span>${data.capital}</span></p>
            <p>Population : <span>${(Number(data.population) / 10000000 ).toFixed(2)}</span> Cr</p>
        </div>
        </div>`;

        document.body.insertAdjacentHTML('afterbegin', templete);;
    })
}

printCountry('USA');
printCountry('britain');
printCountry('france');
printCountry('germany');
printCountry('canada');
printCountry('Republic of India');
