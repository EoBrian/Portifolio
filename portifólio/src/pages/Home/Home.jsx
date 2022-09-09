//css
import "./Home.css"
//assets
import Me from "../../assets/me-1000px.jpg"
//hoocks
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()

  return (
    <article className="card">
      
      <div className="about-me">
      
        <figure>
          <img width="100%" src={Me} alt="I - Brian Ferreira" />
        </figure>
        
        <div>
          <div>
            <h2>Quem sou?</h2>
            <p><em>Brian Ferreira</em> ! <strong>Desenvolvedor Front-End</strong> e mágico nas horas vagas! <br /> Me considero ágil e disposto a aprender sobre coisas novas</p>
          </div>

          <div className="skills">
            <h2>Habilidades:</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Firebase</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h2>O que acha de trabalharmos juntos?</h2>
            <button className="btn" onClick={()=> navigate("/contact-me")}>Contate-me</button>
          </div>
        </div>
      </div>
      
    </article>
  )
}

export default Home