import {
  faCss3,
  faHtml5,
  faJava,
  faJsSquare,
  faPhp,
  faPython,
  faReact,
  faVuejs
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = [
  {
    id: 1,
    icon: <FontAwesomeIcon size="5x" icon={faJava} />,
    text: 'Java',
  },
  {
    id: 2,
    icon: <FontAwesomeIcon size="5x" icon={faPython} />,
    text: 'Python',
  },
  {
    id: 3,
    icon: <FontAwesomeIcon size="5x" icon={faHtml5} />,
    text: 'HTML',
  },
  {
    id: 4,
    icon: <FontAwesomeIcon size="5x" icon={faJsSquare} />,
    text: 'JavaScript',
  },
  {
    id: 5,
    icon: <FontAwesomeIcon size="5x" icon={faReact} />,
    text: 'React.js',
  },
  {
    id: 6,
    icon: <FontAwesomeIcon size="5x" icon={faCss3} />,
    text: 'CSS',
  },
  {
    id: 7,
    icon: <FontAwesomeIcon size="5x" icon={faVuejs} />,
    text: 'Vue.js',
  },
  {
    id: 8,
    icon: <FontAwesomeIcon size="5x" icon={faPhp} />,
    text: 'PHP',
  },
];

export default icons;