import { registerRootComponent } from 'expo';

import App from './App';

export const categories = [
    "Oranges",
    "Bananas",
    "Pineapple",
    "Apple",
    "Cherry"
];




export const featuredFruits = [
    {
        name: 'Australian Orange',
        price: "12.30",
        stars: 4,
        desc: 'Sweet and juicy',
        shadow: 'orange',
        image: require('./assets/images/orange.jpg'),
        color: opacity => `rgba(251, 216, 146, ${opacity})`, // color is a function
    },
    {
        name: 'Flesh Nectarine',
        shadow: 'red',
        price: "12",
        stars: 3,
        desc: 'Sweet and juicy',
        image: require('./assets/images/peach.png'),
        color: opacity => `rgba(255, 170, 157, ${opacity})`
    },
    {
        name: 'Red Grapefruit',
        price: "30",
        stars: 4,
        desc: 'Sweet and juicy',
        shadow: 'red',
        image: require('./assets/images/redOrange.jpg'),
        color: opacity => `rgba(255, 163, 120, ${opacity})`
    },
    {
        name: 'Green Apple',
        price: "10.5",
        stars: 4,
        desc: 'Sweet and juicy',
        shadow: 'green',
        image: require('./assets/images/greenApple.jpg'),
        color: opacity => `rgba(139, 243, 139, ${opacity})`
    },
    {
        name: 'Black Grapes',
        price: "40",
        stars: 4,
        desc: 'Sweet and juicy',
        shadow: 'purple',
        image: require('./assets/images/blackGrapes.jpg'),
        color: opacity => `rgba(255, 163, 120, ${opacity})`
    },
];



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
