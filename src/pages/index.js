import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am a student at UFRPE attending the end of my undergraduate degree
            in computer science. I am passionate about programming and I was a 
            beginner researcher in Learning Analytics and I am currently a WEB
            programmer with a grant from UFRPE trying to improve my developer skills.
            In addition, I am passionate about fighting games, coffee despite 
            moderating consumption and I love reading and spending time with friends
            and family. 
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web fullstack junior developer</h3>
              <div className="subheading mb-3">UFRPE - IPÊ</div>
              <p>
                I work in the development of internal systems for the University,
                usually websites promoting research groups. The technologies 
                used are the basic WEB together with the Bootstrap 4 framework
                for Frontend and for Backend we use Drupal and PHP.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Grant from FACEPE - PIBIC</h3>
              <div className="subheading mb-3">UFRPE - EVANTE</div>
              <p>
                In this scholarship I tried to build a dashboard using the R
                language with the Shiny framework and other packages for 
                handling data visualization such as the tidyverse packages.
                At the end of the scholarship we built a panel in order to give
                teachers and managers ways to evaluate students formatively in 
                addition to providing information to guide decision making within
                the classroom, improving the teaching-learning process.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2020 - November 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Grant from CNPQ - PIBITI</h3>
              <div className="subheading mb-3">UFRPE - EVANTE</div>
              <p>
                I used data processing, analysis anda visualization techniques 
                in Python and R languages ​​to analyze educational data and with
                the results we had ideas to improve virtual learning environments.
                Dessa ideias vieram a concepção de alguns dashboards que construímos
                para serem utilizados com o ambiente virtual de aprendizagem moodle
                e dar a professores e gestores a capacidade de avaliar formativamente
                os alunos em disciplinas híbridas e à distância através da análise
                do comportamento e interação dos alunos na plataforma
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2018 - August 2019</span>
            </div>
          </div>
        </div>
      </ section>
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universidade Federal Rural de Pernambuco</h3>
              <div className="subheading mb-3">Degree in computing</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2017 - Present</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-r-project"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git-alt"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-github"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-linux"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-php"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-yarn"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-trello"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            In addition to wanting to become a web developer, I enjoy most of the time with my friends and family. When I'm just spending time reading and / or playing fighting games.
          </p>
          <p className="mb-0">
            When I'm tired, I see series and films usually of science fiction and fantasy, I love to cook and spend a good part of my time studying and building fullstack projects for the web.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Publication of an article in RENOTE 2020 - "Uma Revisão Sistemática da Literatura para Identificação de Lacunas de Pesquisa Relacionadas a Mineração de Processos Educacionais"
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Publication of an article in RENOTE 2020 - "Mapeamento das Tecnologias Educacionais Digitais adotadas para o ensino-aprendizagem de Matemática em instituições de Ensino Médio no Brasil"
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Scrum Foundation Professional Certificate(SFPC) - CertiProf
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Advanced Training in Machine Learning using Google Cloud - Parqtel/UPE
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Code Like a Fullstack Girl - Digital Inovation One
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Become Remote -  Digital Inovation One
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Intermediary English I - LEAD DELL
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Introduction to Linux - Lúmina UFRGS
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              UI and UX - Tim Tec
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Python 3 Fast Course - Cod3r
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Volunteer to technical team assistant at TDC Recife 2019
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Volunteer for technical team assistant at CTRL + E 2019
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
