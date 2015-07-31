var input, button, greeting;

function setup() {

  // loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Johannesburg&units=metric', gotWeather);

  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);
}

function greet() {
  var name = input.value();
  greeting.html('CITY: '+name);
  input.value('');

  var jsonFirst = "http://api.openweathermap.org/data/2.5/weather?q=";
  var jsonSecond = "&units=metric"
  var url = jsonFirst.concat(name, jsonSecond);

  loadJSON(url, gotWeather);

  console.log(url);
  


}

function gotWeather(weather) {

    var weather1 = (weather.weather.id);
    var weather2 = (weather.weather.description);
    console.log(weather1);
    // console.log(weather2);
    var code = weather1.slice( 6 , 7 );
  
    console.log(code);


  }
