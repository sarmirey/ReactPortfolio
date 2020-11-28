import hackalumni from '../../../Images/hackalumni.png';
import policydoc from '../../../Images/policydoc.png';
export default [
    {
      id: 1,
      image: <img style = {{marginTop: '0.5rem',marginLeft: '0.5rem', width: 300, height: 165, justifyItems: 'center'}} src = {policydoc} alt = " " />,
      visit: "",
      git: "",
      header: "Policy Document Website",
      languages: ['Vue.js','JavaScript', 'Flask', 'SQL', 'Ajax'],
      description: 'Developed dynamic Full-Stack Application that organized policy documents used organization-wide that filters by different locations and Departments',
    },
    {
      id: 2,
      image: <img style = {{marginLeft: '0.5rem',width: 300, height: 170, justifyItems: 'center'}} src = {hackalumni} alt = " " />,
      header: "Hack Alumni Website",
      languages: ['Gatsby.js', 'React.js', 'Material-UI', 'JavaScript'],
      visit: "https://hackalumni.com/",
      git: "",
      description: 'Working with a team a of 9 to develop a static web application where Hack Alumni can find events, jobs, and opportunities in Boston',
    },
]