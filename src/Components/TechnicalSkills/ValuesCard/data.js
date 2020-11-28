import communicator from '../../../Images/communicator.svg';
import creativity from '../../../Images/creativity.svg';
import fastLearner from '../../../Images/fastlearner.svg';
import image from '../../../Images/teamwork.svg';
import problemsolver from '../../../Images/problemsolver.svg';
import responsible from '../../../Images/responsible.svg';
const values = [
    {
      id: 1,
      icon: <img style = {{width: 200, height: 200}} src = {image} alt = " " />,
      text: 'Team Player'
    },
    {
        id: 2,
        icon: <img style = {{width: 200, height: 200}} src = {fastLearner} alt = " " />,
        text: 'Fast Learner'
      },
      {
        id: 3,
        icon: <img style = {{width: 200, height: 200}} src = {problemsolver} alt = " " />,
        text: 'Problem Solver'
      },
      {
        id: 4,
        icon: <img style = {{width: 200, height: 200}} src = {communicator} alt = " " />,
        text: 'Great Communicator'
      },
      {
        id: 5,
        icon: <img style = {{width: 200, height: 200}} src = {creativity} alt = " " />,
        text: 'Creative Thinker'
      },
      {
          id: 6,
          icon: <img style = {{width: 200, height: 200}} src = {responsible} alt = " " />,
          text: 'Responsible'
        },
  ];
  
  export default values;