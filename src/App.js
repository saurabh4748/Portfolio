import React from "react"
import ContactComponents from "./contactComponents/ContactComponents"

function App() {
  return (
    <>
    {/* HEADER */}
     <header>
      <div class="container">
        <div class="nav">
        <a href="https://saurabh4748.netlify.app/"> <div class="nav1"><img src="./images/s.png" alt="icon" height="50px"/>&nbsp;aurabh</div></a>
          <div class="nav2">
            <div class="menu"><a href="#about">about</a></div>
            <div class="menu"><a href="#projects">projects</a></div>
            <div class="menu"><a href="https://creativeaces.medium.com/">Blogs</a></div>
             <div class="menu"><a href="#contact">contact</a></div>
          </div>
         </div>
      </div>
    </header>
    {/* HOME SCREEN */}
    <div class="Mainbackground" id="home">
      <div class="topBackground"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#001517"
          fillopacity="1"
          d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,277.3C560,256,640,224,720,186.7C800,149,880,107,960,122.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <div class="container fluids">
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="screenWords">
              <h1>Hey, I'm Saurabh.</h1>
              <p>
                A Software developer. Specializing in building exceptional
                trending applications. Feel free to take a look at my latest projects.
              </p>
              <div class="twoMainButton">
                <div class="buttonMain">
                  <a href="https://drive.google.com/file/d/1yB53YFYPHWuhU6exbf6Ac0sWsUd_OpCR/view?usp=sharing">Resume</a>
                  <div class="hrizontalLine"></div>
                </div>
                <div class="buttonMain">
                  <a href="#contact">Contact</a>
                  <div class="hrizontalLine diff"></div>
                </div>
              </div>
            </div>
            <div class="footerMedias">

<div class="footerMedia"> <a href="mailto:pandey.saurabh4748@gmail.com"
    ><img src="./images/google.png" alt="gmail"/>
    </a> </div>

    <div class="footerMedia"> <a href="tg://resolve?domain=saurabh4748" 
    ><img src="./images/telegram.png" alt="telegram"/>
    </a> </div>

    <div class="footerMedia"> <a href="https://www.linkedin.com/in/saurabh4748"
    ><img src="./images/linkedin.png" alt="linkedin"/>
   </a> </div> 


   <div class="footerMedia"> <a href="https://creativeaces.medium.com/"
    > <img src="./images/medium.png" alt="medium"/></a></div>


  <div class="footerMedia"><a href="https://github.com/saurabh4748"
    > <img src="./images/github.png" alt="github"/></a></div>

</div>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="screenImage">
              <img src="./images/homescreen.png" alt="irene blog" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
      {/* ABOUT */}
      <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="aboutMeImg">
                  <img src="./images/about.png" alt="about me" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-me">
                  <h5>About me</h5>
                  <div class="aboutHorizontalLine"></div>
                  <p>
                    I enjoy creating things that live on the internet, whether
                    that be websites, applications or anything in between. My
                    goal is to always build products that provide pixel-perfect,
                    performant experiences.
                  </p>
                  <p>
                    Currently, I am a final year student pursuing B.Tech with majors in 
                    Computer Science and Engineering.  I am quite enthusiastic about 
                    learning new and emerging technologies, and always looks for 
                    something new to try out.
                  </p>
                  <p>
                  I like sketching , video games and walking through the random places.
                  </p>
                  <p>
                  In this portfolio, you will find my Projects, Blog, and all the things that I want to brag about.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
   {/* RECENT WORK */}
   <div class="container" id="projects">
      <div class="article">
        <h2>Projects</h2>
        <hr />
        <div class="rows">
          <div class="shop col-lg-3 col-md-4 col-sm-6">
            <div class="shopBack">
              <img src="./images/university_app.gif" alt="recent"/>
              <div class="shoplebal">
                <a href="https://github.com/saurabh4748/College_App_User">Read More</a>
              </div>
            </div>
            <div class="shoptext">
              <p>University App</p>
              <h3>
              This is an android application aimed to be a one-stop for Panjab University students.
              </h3>
            </div>
          </div>
          <div class="shop col-lg-3 col-md-4 col-sm-6">
            <div class="shopBack">
              <img src="./images/attendance.jpg" alt="recent" />
              <div class="shoplebal">
                <a href="https://github.com/saurabh4748/Attendance-with-Face-Recognition">Read More</a>
              </div>
            </div>
            <div class="shoptext">
              <p>Attendance System</p>
              <h3>
              Facial recognition with high accuracy using Webcam & record live in an excel sheet.
              </h3>
            </div>
          </div>
          <div class="shop col-lg-3 col-md-4 col-sm-6">
            <div class="shopBack">
              <img src="./images/goeaterys.gif" alt="recent" />
              <div class="shoplebal">
                <a href="https://github.com/saurabh4748/goEatery">Read More</a>
              </div>
            </div>
            <div class="shoptext">
              <p>Sell And Buy App</p>
              <h3>
                Responsive Website provides information of the best restaurants of the city.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

   {/* CONTACT */}
    <div class="contactme" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
          <ContactComponents/>
          </div>
        </div>
      </div>
    </div>
    
    {/* FOOTER */}
    <footer>
      <div class="container">
        <div class="footerContainer">
          <div class="footerNav">
            <p><a href="#about">About</a></p>
            <p><a href="https://creativeaces.medium.com/">blogs</a></p>
            <p><a href="#projects">Projects</a></p>
            <p><a href="#contact">contact</a></p>
          </div>
          <div class="footerMedias">

<div class="footerMedia"> <a href="mailto:pandey.saurabh4748@gmail.com"
    ><img src="./images/google.png" alt="google"/>
    </a> </div>

    <div class="footerMedia"> <a href="tg://resolve?domain=saurabh4748" 
    ><img src="./images/telegram.png" alt="telegram"/>
    </a> </div>

    <div class="footerMedia"> <a href="https://www.linkedin.com/in/saurabh4748"
    ><img src="./images/linkedin.png" alt="linkedin"/>
   </a> </div> 


   <div class="footerMedia"> <a href="https://creativeaces.medium.com/"
    > <img src="./images/medium.png" alt="medium"/></a></div>


  <div class="footerMedia"><a href="https://github.com/saurabh4748"
    > <img src="./images/github.png" alt="github"/></a></div>

</div>
          
        </div>
      </div>
    </footer>
    </>
  );
}

export default App;
