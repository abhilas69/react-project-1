import React from 'react'
import Card from './components/Card'

const App = () => {
  const allUsers = [
  {
    image: "https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg?w=2000",
    Employee: "Google",
    name: "Aarav Sharma",
    age: 30,
    sex:"male",
    Role: "Software Engineer",
    skills: "master in JavaScript, React, and Node.js with a strong background in building scalable web applications. Experienced in working with cross-functional teams to deliver high-quality software solutions."
  },
  {
    image: "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162022.jpg?w=2000",
    Employee: "Amazon",
    name: "Priya Patel",
    age: 28,
    sex:"female",
    Role: "Data Analyst",
    skills: "skilled in data analysis, visualization, and statistical modeling. Proficient in Python, R, and SQL with experience in working with large datasets to derive actionable insights for business decision-making."
  },
  {
    image: "https://tse4.mm.bing.net/th/id/OIP.ObAKeeMcH2S0AFSbdTU1DwHaHa?pid=Api&P=0&h=180",
    Employee: "Microsoft",
    name: "Carlos Mendez",
    age: 35,
    sex:"male",
    Role: "DevOps Engineer",
    skills: "experienced in DevOps practices, CI/CD pipelines, and cloud infrastructure. Proficient in Docker, Kubernetes, and AWS with a strong focus on automation and deployment optimization."
  },
  {
    image: "https://tse4.mm.bing.net/th/id/OIP.y_-RrO81dmnPR5dKO0GYWAHaHa?pid=Api&P=0&h=180",
    Employee: "Apple",
    name: "Sarah Jenkins",
    age: 32,
    sex:"female",
    Role: "UI/UX Designer",
    skills: "creative and detail-oriented UI/UX designer with a passion for creating intuitive and engaging user experiences. Proficient in Figma, Sketch, and Adobe Creative Suite."
  },
  {
    image: "https://tse3.mm.bing.net/th/id/OIP.aKv6eSHmj1l7CW472M53RwHaHa?pid=Api&P=0&h=180",
    Employee: "Netflix",
    name: "Liam O'Connor",
    age: 29,
    sex:"male",
    Role: "Full-Stack Developer",
    skills: "full-stack developer with a strong foundation in both frontend and backend technologies. Skilled in JavaScript, Python, and cloud platforms with a focus on building robust and scalable applications."
  },
  
  {
    image: "https://tse1.mm.bing.net/th/id/OIP.eQhlfZG7kKSNQpVsEZpK8QHaHa?pid=Api&P=0&h=180",
    Employee: "Spotify",
    name: "Mei Ling",
    age: 31,
    sex:"female",
    Role: "Cybersecurity Analyst",
    skills: "cybersecurity analyst with a strong background in identifying and mitigating security threats. Proficient in security tools and frameworks with experience in conducting security assessments and implementing robust security measures."
  },

  {
    image: "https://tse4.mm.bing.net/th/id/OIP.QGp1OfqE2hWc2OBHr7aFDwHaJ0?pid=Api&P=0&h=180",
    Employee: "Meta",
    name: "Marcus Vance",
    age: 34,
    sex:"male",
    Role: "Technical Product Manager",
    skills: "technical product manager with a strong background in leading cross-functional teams to deliver innovative products. Proficient in product strategy, agile methodologies, and stakeholder management."
  },
  {
    image: "https://tse3.mm.bing.net/th/id/OIP.dZPmortTy5tprJFcvd5PSQHaHa?pid=Api&P=0&h=180",
    Employee: "Google",
    name: "Elena Rostova",
    age: 28,
    sex:"female",
    Role: "Backend Engineer",
    skills: "backend engineer with a strong background in developing and maintaining scalable backend systems. Proficient in Python, Java, and cloud platforms with experience in building robust and efficient server-side applications."
  },
  {
    image: "https://tse3.mm.bing.net/th/id/OIP.dZPmortTy5tprJFcvd5PSQHaHa?pid=Api&P=0&h=180",
    Employee: "Amazon",
    name: "Tariq Al-Mansoor",
    age: 30,
    sex:"male",
    Role: "Mobile App Developer",
    skills: "mobile app developer with a strong background in designing and developing cross-platform mobile applications. Proficient in React Native, Swift, and Kotlin with experience in creating engaging and user-friendly mobile experiences."
  },
  {
    image: "https://tse3.mm.bing.net/th/id/OIP.BqnwXdwAyCzdFJKHsCmcLAHaHa?pid=Api&P=0&h=180",
    Employee: "Google",
    name: "Chloe Dubois",
    age: 26,
    sex:"female",
    Role: "Quality Assurance Engineer",
    skills: "quality assurance engineer with a strong background in testing and ensuring the quality of software products. Proficient in test automation, manual testing, and defect tracking with experience in working with development teams to deliver high-quality software."
  },
  ]
  return (

    <>
    <div className='parent'>
      {allUsers.map((user, index) => (
        <Card key={index} image={user.image} name={user.name} age={user.age} sex={user.sex} about={user.skills} Employee={user.Employee} Role={user.Role} />
      ))}
    </div>
    </>
  )
}

export default App

