import CodeIcon from '@material-ui/icons/Code';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageIcon from '@material-ui/icons/Language';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
const icons = [
    {
        id: 1,
        title: <LanguageIcon fontSize = 'large' />,
        text: 'Web Development',
        description: 'I love building and designing Full Stack Applications. I love the idea of being able to use my own creativity, seeing results immediately, and building a website people can interact with'

    },
    {
        id: 2,
        title: <CodeIcon fontSize = 'large' />,
        text: 'Software Engineering',
        description: 'I love creating applications that create a difference. I love staying up to date with the latest coolest technologies that help create products more efficiently'

    },
    {
        id: 3,
        title: <FontAwesomeIcon size="lg" icon={faDatabase} />,
        text: 'DataBase Management',
        description: 'I have worked with several different types of databases, such as mySql and Oracle. I find it interesting that from a huge collection of data, you are able to extract exactly what you need to present to the user',

    },
];

export default icons;