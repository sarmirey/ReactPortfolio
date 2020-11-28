import ATM from '../../../Images/ATM.png'
import currentPortfolio from '../../../Images/currentPortfolio.png'
import pizzaproject from '../../../Images/pizza_project.png'
import portfolioimage from '../../../Images/oldportfolio.png';
const personalProjects = [
    {
      id: 1,
      image: <img style = {{marginTop: '0.5rem',marginLeft: '0.5rem', width: 300, height: 165, justifyItems: 'center'}} src = {portfolioimage} alt = " " />,
      header: "Old Portfolio Project",
      visit: "https://sarmirey.github.io/PersonalWebsite/",
      git: 'https://github.com/sarmirey/PersonalWebsite',
      languages: ['HTML', 'CSS', 'Bootstrap'],
      description: 'Web application that demonstrates CS projects, skills, work experience, and images. Created custom CSS for different parts of the web application and is mobile friendly.',
    },
    {
      id: 2,
      image: <img style = {{marginTop: '0.5rem',marginLeft: '0.5rem', width: 300, height: 165, justifyItems: 'center'}} src = {currentPortfolio} alt = " " />,
      header: "Current Portfolio Project",
      visit: "https://reynerio-sarmiento.com/",
      git: "https://github.com/sarmirey/ReactPortfolio",
      languages: ["React.js", "Material-UI", 'JavaScript'],
      description: 'React based web application that uses dynamic programming, prop drilling, conditional rendering, component based organization, and React Hooks',
    },
    {
      id: 3,
      image: <img style = {{marginTop: '0.5rem',marginLeft: '0.5rem',width: 300, height: 165, justifyItems: 'center'}} src = {pizzaproject} alt = " " />,
      header: 'Pizza Project',
      visit: "",
      git: 'https://github.com/sarmirey/pizza_project',
      languages: ['PHP', 'HTML', 'SQL', 'JavaScript'],
      description: 'Full Stack Web Application for pizzeria customers to order customized pizzas and significantly improve the way managers control orders',
    },
    {
      id: 4,
      image: <img style = {{marginTop: '0.5rem',marginLeft: '0.5rem',width: 300, height: 165, justifyItems: 'center'}} src = {ATM} alt = " " />,
      header: 'ATM Project',
      visit: "https://streamable.com/yh5a5j",
      git: 'https://github.com/sarmirey/ATMProject/tree/main',
      languages: ['Java', 'OOP'],
      description: 'A Java program that simulates an ATM with user authentication. An ATM where you can check your balance, saved histoy, withdrawal transfers, and deposit transfers',
    }
]

export default personalProjects;