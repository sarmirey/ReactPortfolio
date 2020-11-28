import GroceryBud from '../../../Images/grocerybud.png';
import Menu from '../../../Images/Menu.png';
const udemyProjects = [
    {
      id: 1,
      image: <img style = {{marginTop: '0.5rem',marginLeft: '0.5rem', width: 300, height: 165, justifyItems: 'center'}} src = {GroceryBud} alt = " " />,
      header: "Grocery Bud",
      git: 'https://github.com/sarmirey/GroceryBud',
      visit: 'https://grocery-bud-app.netlify.app/',
      languages: ['React.js', 'JavaScript', 'CSS'],
      description: 'Grocery List Application where you add items to a list, edit items from the list, delete items from the list, as well as clear all items from the list ',
    },
    {
      id: 2,
      image: <img style = {{marginTop: '0.5rem',marginLeft: '0.5rem', width: 300, height: 170, justifyItems: 'center'}} src = {Menu} alt = " " />,
      header: "Menu Project",
      git: 'https://github.com/sarmirey/MenuProject',
      visit: 'https://menu-app-filter.netlify.app/',
      languages: ['React.js', 'JavaScript', 'CSS'],
      description: 'Menu App where you can filter different items on the menu: breakfast, lunch, or dinner. Each card is presented with their respective name, description, and price',
    },
]

export default udemyProjects;