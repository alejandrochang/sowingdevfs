/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import SowingDevWord from './img/SowingDevWord.png';
import AuthorPic from './img/meImg.png';

// Homepage
export default function Home() {
  return (
    <div className="scroll-assist">
      <div className="nav-container">
        <a id="top"></a>
        <nav className="absolute transparent">
          <div className="nav-bar">
            <div className="module left">
              <a href="index.html">
                <Image
                  className="logo logo-light"
                  src={SowingDevWord}
                  width={200}
                  height={100}
                  alt="SowingDev Logo"
                />
              </a>
            </div>
            <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
              <i className="ti-menu"></i>
            </div>
            <div className="module-group right">
              <div className="module left">
                <ul className="menu">
                  <li>
                    <a href="#what_is_sowing_dev">
                      What is Sowing Dev?
                    </a>
                  </li>
                  <li>
                    <a href="#meet_your_mentor">
                      Meet your mentor
                    </a>
                  </li>
                  <li>
                    <a href="#what_it_cost">
                      What it Cost?
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="main-container">
        <section className="bg-primary" id="what_is_sowing_dev">
          <div className="container">
            <div className="row mb20 pt120">
              <div className="col-sm-12">
                <h4 className="uppercase mb40 mb-xs-24">What is Sowing Dev?</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-sm-10">
                <p className="lead fade-half mb-xs-24">
                At SowingDev, we believe in the power of growth, mentorship, and community. Our mentorship program is more than just a
                resource; its a nurturing ground for beginner, junior and aspiring developers looking to cultivate their skills and thrive in the world of
                technology.<br /><br />
                In a rapidly evolving industry, finding the right path can be challenging. Our mentorship program is here to provide
                guidance, support, and the resources you need to begin your career journey successfully.<br /><br />
                Our mentorship is about sowing the seeds of knowledge, innovation, and collaboration, and reaping the rewards of
                personal and professional growth. Its an opportunity to network, learn, and give back to the tech community while
                fostering lasting relationships with fellow developers. Explore our program, discover how SowingDev can make a difference in your career,
                and join us on this exciting journey of sowing, nurturing, and growing together.<br /><br />
                </p>
              </div>
            </div>
          </div>
          <div className="container" id="meet_your_mentor">
            <div className="row pt120 pt-xs-80">
              <div className="col-sm-12">
                <h4 className="uppercase mb30 mb-xs-24">About Me: Meet your Mentor</h4>
              </div>
            </div>
            <div className="row mb30">
              <div className="col-sm-12">
                <div className="pull-left mb-xs-24">
                  <Image
                    className="inline-block image-small"
                    src={AuthorPic}
                    width={75}
                    height={100}
                    alt="Author Picture"
                  />
                </div>
                <div className="inline-block p32 p0-xs">
                  <h3 className="uppercase mb8">Alejandro Chang</h3>
                  <h5 className="uppercase">Sr. Software Engineer</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-5">
                <p className="fade-half">
                Hello, Im Alejandro Chang, your dedicated mentor, and Im thrilled to be your guide on your journey to growing
                as a web developer. With over 5 years of experience in the field, Im here to share my knowledge and
                expertise in JavaScript, React, Node.js, Next.js among other technologies and the foundational principles of full-stack web development.
                </p>
              </div>
              <div className="col-md-4 col-sm-5">
                <p className="fade-half">
                My passion for web development ignited when I first delved into the world of coding, and I havent looked back since.
                Over the years, Ive had the privilege of working on diverse projects, from crafting responsive front-end user
                interfaces to architecting robust back-end systems. My expertise spans the entire web development spectrum, and Im
                particularly enthusiastic about the technologies youre eager to explore.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h4 className="uppercase mb-xs-24">Expertise</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-sm-10">
                <div className="progress-bars">
                  <div className="progress progress-2 text-left mb32">
                    <span className="title">Javascript</span>
                    <div className="bar-holder">
                      <div className="progress-bar" data-progress="95"></div>
                    </div>
                  </div>
                  <div className="progress progress-2 text-left mb32">
                    <span className="title">React</span>
                    <div className="bar-holder">
                      <div className="progress-bar" data-progress="95"></div>
                    </div>
                  </div>
                  <div className="progress progress-2 text-left mb32">
                    <span className="title">Node.js</span>
                    <div className="bar-holder">
                      <div className="progress-bar" data-progress="85"></div>
                    </div>
                  </div>
                  <div className="progress progress-2 text-left mb32">
                    <span className="title">HTML</span>
                    <div className="bar-holder">
                      <div className="progress-bar" data-progress="85"></div>
                    </div>
                  </div>
                  <div className="progress progress-2 text-left mb32">
                    <span className="title">CSS</span>
                    <div className="bar-holder">
                      <div className="progress-bar" data-progress="85"></div>
                    </div>
                  </div>
                  <div className="progress progress-2 text-left mb32">
                    <span className="title">Next.js</span>
                    <div className="bar-holder">
                      <div className="progress-bar" data-progress="75"></div>
                    </div>
                  </div>
                  <div className="progress progress-2 text-left mb32">
                    <span className="title">Full stack Web Fundamentals</span>
                    <div className="bar-holder">
                      <div className="progress-bar" data-progress="95"></div>
                    </div>
                  </div>
                </div>
                <p className="lead fade-half mb40 mb-xs-24">
                  Heres what you can expect from our mentorship journey:
                </p>
                <p className="lead fade-half mb40 mb-xs-24">JavaScript Mastery: JavaScript is the backbone of modern web development, and
                  Im here to help you understand it inside
                  out. Together, well explore the languages intricacies, from the basics to advanced topics.</p>
                <p className="lead fade-half mb40 mb-xs-24">React Brilliance: React has revolutionized the way we build user interfaces.
                  Ill guide you through the process of
                  creating dynamic and interactive web applications using this powerful library.</p>
                <p className="lead fade-half mb40 mb-xs-24">Node.js and Beyond: Understanding server-side development is key to building
                  full-stack applications. Well dive into
                  Node.js, its ecosystem, and how it fits into the broader web development landscape and understanding APIs at a
                  fundamental level.</p>
                <p className="lead fade-half mb40 mb-xs-24">Next.js Expertise: Next.js is the future of web development, providing a
                  powerful framework for building performant and
                  SEO-friendly applications. Ill help you harness its capabilities.</p>
                <p className="lead fade-half mb40 mb-xs-24">Full-Stack Fundamentals: To excel in web development, its essential to grasp
                  the fundamentals of both front-end and
                  back-end and maybe even a little mobile development. Ill provide you with a comprehensive understanding of the
                  full-stack, from databases to deployment.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary" id="what_it_cost">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h4 className="uppercase mb40 mb-xs-24">What it Cost?</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-sm-10">
                <p className="lead fade-half mb40 mb-xs-24">
                  In the spirit of empowerment and fostering a thriving community of developers, our mentorship program comes with a
                  promise: it costs nothing but your dedication, time, and commitment. We firmly believe that knowledge should be freely
                  shared, and success should be within reach for all aspiring engineers. Our mentorship is entirely accessible without any
                  financial burden. Instead, it thrives on the priceless investments of effort, the precious moments dedicated to
                  one-on-one meetings with your mentor, and the unwavering commitment to your growth and learning journey. By devoting
                  your time and energy, you unlock the doors to a world of opportunities and wisdom, paving the way for your advancement
                  in the exciting field of web development. Your success is our success, and were here to support you every step of the
                  way.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-md-8">
                <h4 className="uppercase mb40 mb-xs-24">Contact</h4>
                <div className="col-sm-6 p0">
                  <div className="mb40 mb-xs-24">
                    <h6 className="uppercase mb0">Email</h6>
                    <p className="fade-half">
                      alejandrochang10@gmail.com
                    </p>
                  </div>
                  <div className="mb40 mb-xs-24">
                    <h6 className="uppercase mb0">Phone</h6>
                    <p className="fade-half">
                      +1(650)716-8403
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 p0">
                  <div className="mb40 mb-xs-24">
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/alejandro-chang/" target="_blank" rel="noopener noreferrer">
                          <h6 className="uppercase">
                          <svg style={{ fill: '#ededee' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                          </svg>&nbsp;&nbsp; LinkedIn
                          </h6>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.alejandrochang.com" target="_blank" rel="noopener noreferrer">
                          <h6 className="uppercase">
                            <i className="ti-dribbble">&nbsp;</i> Personal Website
                          </h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-1 bg-dark bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <img alt="Logo" className="logo" src="img/SowingDevWord.png" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <span className="sub">&copy; Copyright 2023</span>
              </div>
              <div className="col-sm-6 text-right">
                <ul className="list-inline social-list">
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-vimeo-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a className="btn btn-sm fade-half back-to-top inner-link" href="#top">Top</a>
        </footer>
      </div>
    </div>
  )
}
