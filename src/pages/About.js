import '../styles/About.css'
import ImagenAbout from '../img/about.jpg'

const About = () => {
    return(
        <div className="container-fluid contenedor-about">
                    <img className='img-about' src={ImagenAbout} alt='Imagen de cócteles'/>
                    <p className='texto-about'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor velit, gravida non nunc quis, 
                        lobortis commodo ex. Nunc et quam sed urna pretium mollis. Aenean ut ligula vel tellus porttitor porta 
                        sit amet non erat. Sed placerat condimentum lacus at blandit. Praesent eu vehicula nisl, eget volutpat eros. 
                        Ut vel augue enim. Morbi scelerisque accumsan mi id vehicula. Nam vitae pellentesque urna. 
                        Sed vehicula mauris vitae magna eleifend mollis. Proin at massa ac orci dignissim lobortis eget hendrerit est.
                        Quisque ipsum quam, feugiat ut justo quis, ultrices bibendum dolor.
                    </p>   
        </div>
    )
}

export default About;