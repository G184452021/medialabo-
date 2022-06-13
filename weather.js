let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log(data.name);
console.log(data.main.temp_max);
console.log(data.main.temp_min);

/*let a1 = document.querySelector('span#Beijing');
a1.textContent = [data.name];

let a2 = document.querySelector('span#max')
a2.textContent = [data.main.temp_max];

let a3 = document.querySelector('span#min')
a3.textContent = [data.main.temp_min];
*/


let m = document.querySelector('button#print');
m.addEventListener('click', sendRequest);

function sendRequest() {
  let i = document.querySelector('input[key="key"]');
  let id = i.value;
  
  if (id === "カイロ") {
    id = '360630';
  } else if (id === "モスクワ") {
    id = '524901';
  } else if (id === "ヨハネスブルク") {
    id = '993800';
  } else if (id === "北京") {
    id = '1816670';
  } else if (id === "東京") {
    id = '1850147';
  } else if (id === "シンガポール") {
    id = '1880252';
  } else if (id === "シドニー") {
    id = '2147714';
  } else if (id === "ロンドン") {
    id = '2643743';
  } else if (id === "パリ") {
    id = '2968815';
  } else if (id === "リオデジャネイロ") {
    id = '3451189';
  } else if (id === "ニューヨーク") {
    id = '5128581';
  } else if (id === "ロサンゼルス") {
    id = '5368361';
  }
  
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

  axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);
}

function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  let x = document.querySelector('span#city_name');
  x.textContent = [data.name];
  /*
  let x1 = document.querySelector('span#name');
  x1.textContent = [data.name];
  */
  let x2 = document.querySelector('span#weather');
  x2.textContent = [data.weather[0].description];

  let x3 = document.querySelector('span#temp');
  x3.textContent = [data.main.temp] + '℃';

  let x4 = document.querySelector('span#temp_max');
  x4.textContent = [data.main.temp_max] + '℃';

  let x5 = document.querySelector('span#temp_min');
  x5.textContent = [data.main.temp_min] + '℃';

  let x6 = document.querySelector('span#pressure');
  x6.textContent = [data.main.pressure] + 'hPa';
}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}
