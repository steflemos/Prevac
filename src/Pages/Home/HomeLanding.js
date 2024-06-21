import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import laptop from "../../imagens/men.png";
import grafic from "../../imagens/men2.png";
import LogoPrevac from "../../imagens/logoPrevac.png";
import LogoPrevac2 from "../../imagens/people.png";
import img1 from "../../imagens/1.png";
import img2 from "../../imagens/2.png";
import img3 from "../../imagens/3.png";
import img4 from "../../imagens/4.png";
import Cards from "../Components/cards/Cards";
import Footer from "../Components/Footer/Footer";
import "./home.css";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const slides = [
      {
          src: img3,
          alt: 'Imagem 1',
          text: 'Monitoramento inteligente, prevenção eficiente!'
      },
      {
          src: img4,
          alt: 'Imagem 2',
          text: 'Tranquilidade para você, segurança para seus colaboradores'
      },
      {
          src: img2,
          alt: 'Imagem 3',
          text: 'Junte-se às empresas que já confiam no Prevac'
      }
  ];

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const showSlide = (index) => {
      setCurrentSlide((index + slides.length) % slides.length);
  };

  return (
    <div className="HomeLandingPage">
      <div className="image-slider-container">
        <nav className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="divlogo">
            <img src={LogoPrevac} alt="People" className="logoPrevac" />
          </div>
          <div className="optionsHeader">
            <a href="#recursos" className="optionSelect">Serviços</a>
            <a href="#sobre" className="optionSelect">Sobre</a>
            <a href="#como-funciona" className="optionSelect">Como Funciona</a>
            <Link to="/login" className="optionSelect2">Login</Link>
          </div>
        </nav>
        <div className="image-slider">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img className="image" src={slide.src} alt={slide.alt} />
              <div className="text-overlay" dangerouslySetInnerHTML={{ __html: slide.text }} />
            </div>
          ))}
          <div className="navigation">
            <button className="prev" onClick={() => showSlide(currentSlide - 1)}>&#10094;</button>
            <button className="next" onClick={() => showSlide(currentSlide + 1)}>&#10095;</button>
          </div>
        </div>
      </div>
      <section id="recursos">
        <Cards />
      </section>
      <section id="sobre" className="homePage">
        <div className="container-homePage">
          <div className="image-containerHomePage">
            <div className="imagePage">
              <img src={laptop} alt="home image" />
            </div>
            <div className="ellipse-container">
              <div className="ellipse blue"></div>
            </div>
          </div>
          <div className="contentHome">
            <h1 className="titleHomePage2">Protegendo o Futuro da Segurança do Trabalho</h1>
            <p className="descriptionPageHome2">
              O PREVAC é um sistema de monitoramento de segurança em fábricas, usando sensores e câmeras para identificar riscos em tempo real, emitir alertas e gerar relatórios.
              Ele ajuda a criar um ambiente de trabalho seguro e eficiente, conforme as normas regulamentadoras, reduzindo custos e aumentando a satisfação dos funcionários.
            </p>
          </div>
        </div>
      </section>
      <section id="como-funciona" className="homePage4">
        <div className="container-homePage">
          <div className="contentHome">
            <h1 className="titleHomePage3">Como Funciona o PREVAC</h1>
            <p className="descriptionPageHome3">
              Sistema de segurança industrial em tempo real, empregando uma sofisticada rede de sensores IoT especializados em monitoramento de temperatura e pressão.
            </p>
            <p className="descriptionPageHome3">
              Sistema de segurança industrial em tempo real, empregando uma sofisticada rede de sensores IoT especializados em monitoramento de temperatura e pressão.
            </p>
          </div>
          <div className="image-containerHomePage">
            <div className="imagePage2">
              <img src={grafic} alt="home image" />
            </div>
            <div className="ellipse-container">
              <div className="ellipse blue"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
