import './App.css';
import Restaurant from './components/Restaurant'
import pic1 from './images/HalalPizza&Grocery.jpg'
import pic2 from './images/TikkaBowlsAndTacos.jpg'
import pic3 from './images/5thElement.jpg'
import pic4 from './images/Bakkal.jpg'
import pic5 from './images/K&Y.jpg'
import pic6 from './images/EZGrill.jpg'
import pic7 from './images/ChobalGrill.jpg'
import pic8 from './images/HalalChinaBox.jpg'
import pic9 from './images/AladdinGrill.jpg'
import pic10 from './images/Wallys.jpg'
import pic11 from './images/MaaKitchen.jpg'

const App = () => {

  return (
    <div className="App">
      <h1>Best Halal Restaurants in Jax</h1>
      {/* <h2>Welcome to Chicago, Muhib! Check out this calendar to get to know the city and see all the sights during your stay.</h2> */}
      <Restaurant image={pic1} name='Halal Pizza & Grocery' type='Italian' desc='Best Pizza/Wings/Calzones in town' menu='https://halalpizzagrocery.business.site/'/>
      <Restaurant image={pic2} name='Tikka Bowls And Tacos' type='Indian' desc='Indian Chipotle' menu='https://www.tikkabowlsandtacos.com/menu'/>
      <Restaurant image={pic3} name='5th Element' type='Indian' desc='All Things Indian' menu='https://www.my5thelement.com/jacksonville/'/>
      <Restaurant image={pic4} name='Bakkal Foods & Grill' type='Turkish/Mediterranean' desc='Great Kabobs and Desserts' menu='https://jaxbakkal.com/'/>
      <Restaurant image={pic5} name='K&Y' type='Middle Eastern' desc='Great Gyros/Shawarmas' menu='https://www.yelp.com/biz/k-and-y-halal-meats-and-imported-food-jacksonville-2'/>
      <Restaurant image={pic6} name='Ez Halal  Grill' type='American/Middle Eastern' desc='Amazing Burgers and Philly Cheese Steak' menu='https://www.google.com/maps/place/Ez+Grill+Halal+Food/@30.333066,-81.5886209,3a,75y,90t/data=!3m7!1e2!3m5!1sAF1QipMdxz7SdO8iz3BIV9_p-Ak8qbkdOlBWwzivJc7K!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMdxz7SdO8iz3BIV9_p-Ak8qbkdOlBWwzivJc7K%3Dw150-h150-k-no-p!7i2642!8i2100!4m16!1m7!3m6!1s0x88e5b41123c48267:0x20bf4a58f4076e2c!2sEz+Grill+Halal+Food!8m2!3d30.333066!4d-81.5886209!16s%2Fg%2F11bcdhwnf0!3m7!1s0x88e5b41123c48267:0x20bf4a58f4076e2c!8m2!3d30.333066!4d-81.5886209!9m1!1b1!16s%2Fg%2F11bcdhwnf0'/>
      <Restaurant image={pic7} name='Choban Grill' type='Greek' desc='Quick and Tasty Gyros and Bowls' menu='http://www.chobangrill.net/menu'/>
      <Restaurant image={pic8} name='Halal China Box' type='Chinese' desc='Solid Chinese food' menu='https://www.halalchinabox.com/menu-1'/>
      <Restaurant image={pic9} name='Aladdin Grill' type='Middle Eastern/Persian' desc='Nice Kabobs and Falafels' menu='https://food.google.com/chooseprovider?restaurantId=/g/11fr26c2pp&g2lbs=ALIxsqqQMxtZnNYEhbYx8ZjL8WX8X3kfafNl2giIrgSwoqgAztBn56eHZGTO-h84k9AI_6eSfoZd6ovhuEwDmbkGeO1c85dknA%3D%3D&hl=en-US&gl=us&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=n5b9Y9X7NbOrwbkP1Z-ooAY&ei=n5b9Y9X7NbOrwbkP1Z-ooAY&fo_s=OA,AH&sei=CRnQiI19cZipEVGbgs0K7142&utm_campaign&utm_source=tactile'/>
      <Restaurant image={pic10} name="Wally's Gyros-n-Subs" type='Middle Eastern/Lebanese' desc='Really Good Wraps/Subs/Gyros' menu='http://wallysgyro.com/menu/'/>
      <Restaurant image={pic11} name='Maa Kitchen' type='Indian' desc='Great Variety of Indian Food' menu='https://www.maakitchen.com/food-menu/'/>
    </div>
  )
}

export default App
