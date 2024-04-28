import Image from 'next/image';
import SowingDevLogo from '../img/sowingDevWhite.png';
import AuthorPic from '../img/meImg.png';
import { CSSProperties } from 'react';

const Home: React.FC = () => {
  return (
    <div className="main-container">
      <section className="bg-primary" id="what_is_sowing_dev">
        <div className="container">
          <div className="pt120">
            <h4 className="uppercase mb40 mb-xs-24">What is Sowing Dev?</h4>
          </div>
          <div className="row pt">
            <div className="col-md-8 col-sm-10">
              <p className="lead fade-half mb-xs-24">
                At SowingDev, we believe in the power of growth, mentorship, and
                community. Our mentorship program is more than just a resource;
                its a nurturing ground for beginner, junior and aspiring
                developers looking to cultivate their skills and thrive in the
                world of software engineering.
                <br />
                <br />
                In a rapidly evolving industry, finding the right path can be
                challenging and finding the right mentor can be even more
                daunting. Our mentorship program tailors to the need of the
                student to ensure their sucess in the field.
                <br />
                <br />
                Our mentorship is about sowing the seeds of knowledge,
                innovation, and collaboration, and reaping the rewards of
                personal and professional growth. Its an opportunity to network,
                learn, and give back to the tech community while fostering
                lasting relationships with fellow developers. Interested in
                being the best developer you can be? Join us at SowingDev and
                lets grow together!
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="container" id="meet_your_mentor">
          <div className="row pt60 pt-xs-30">
            <div className="col-sm-12">
              <h4 className="uppercase mb30 mb-xs-24">Meet your Mentor</h4>
            </div>
          </div>
          <div className="row mb30">
            <div className="col-sm-12">
              <div className="pull-left mb-xs-24">
                <Image
                  className="inline-block image-small"
                  src={AuthorPic}
                  width={80}
                  height={80}
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
                Hey there! My name is Alejandro Chang, your dedicated mentor,
                and Im thrilled to be your guide on your journey to growing as a
                web developer. With over 6 years of experience in the field, Im
                here to share my knowledge and expertise in Full Stack
                Developmennt, Frontend Engineering and Backend Technologies.
              </p>
            </div>
            <div className="col-md-4 col-sm-5">
              <p className="fade-half">
                My passion for web development ignited when I first delved into
                the world of coding, and I havent looked back since. Over the
                years, Ive had the privilege of working on diverse projects,
                from crafting responsive front-end user interfaces to
                architecting robust back-end systems. My expertise spans the
                entire web development spectrum, and Im particularly
                enthusiastic about not only growing you technically but
                hollistically as an engineer.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 pt-xs-30">
              <h4 className="uppercase mb-xs-24">Expertise</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-10">
              <p className="lead fade-half mb40 mb-xs-24">
                Heres what you can expect from our mentorship journey:
              </p>
              <p className="lead fade-half mb40 mb-xs-24">
                - 1:1 Meetings: Mentorship is built on trust and relationship.
                There is no better way to build a mentorship program than to
                have 1:1 meetings with mentees to understand your blockers,
                needs and see where I can aid. Whether this is meeting via zoom
                or at a coffee shop, my goal here is to get to know you and help
                you grow as a developer.
              </p>
              <p className="lead fade-half mb40 mb-xs-24">
                - Interview Prep: For those looking for new roles, or getting
                their foot in the door of the software world we will go through
                interview prep. This entails, breaking down the what the
                interview process in todays world looks like, ignoring the noise
                of so many things to learn, focusing on the highest Return on
                investments for you that will produce results in ultimately a
                job offer. From curating your LinkedIn, resume building to mock
                interviews and whiteboarding sessions, we will get you ready for
                the next step in your career.
              </p>
              <p className="lead fade-half mb20 mb-xs-24">
                - Technology DeepDives: Depending on your stack and what youre
                trying to level up on we will go through deep dives. This could
                entail breaking down complex algorithms, going thorugh a system
                design round, building a side-project from scratch. The goal
                here is to get you to understand the technology you are working
                with and how to apply it in the real world. Whether its
                improving at your current position or preparing you for your
                dream role, we will create a curated plan to help you achieve
                it.
              </p>
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
                In the spirit of empowerment and fostering a thriving community
                of developers, our mentorship program comes with a promise: it
                costs nothing but your dedication, time, and commitment. We
                firmly believe that knowledge should be freely shared, and
                success should be within reach for all aspiring engineers. Our
                mentorship is entirely accessible without any financial burden.
                Instead, it thrives on the priceless investments of effort, the
                precious moments dedicated to one-on-one meetings with your
                mentor, and the unwavering commitment to your growth and
                learning journey. By devoting your time and energy, you unlock
                the doors to a world of opportunities and wisdom, paving the way
                for your advancement in the exciting field of web development.
                Your success is our success, and were here to support you every
                step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary" id="why_sowing_dev">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="uppercase mb40 mb-xs-24">Our Mission</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-10">
              <div className="verse-container">
                2 Corinthians 9:6 - Remember this: Whoever sows sparingly will
                also reap sparingly, and whoever sows generously will also reap
                generously.
              </div>
              <p className="lead fade-half mb40 mb-xs-24">
                SowingDev is built on the foundation that those who sow
                spearingly will reap spearingly. There is no
                requirement to be religius or have any specific beliefs to be a
                part of SowingDev. However, our foundation of this program is
                built on the biblical principle and verse 2 Corinthians 9:16 shown above.
                We believe that generosity is intrinsic into who we are as humans and a common quality that we can share
                with others. Those who contribute and build others will be built
                up. Our mission is to provide a safe space for developers of all
                levels to grow, learn and thrive in the world of software
                engineering. We believe that mentorship is the key to unlocking
                the potential of the next generation of developers. We are
                committed to providing a nurturing environment where developers
                can learn, grow and collaborate with one another.
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
                  <p className="fade-half">alejandrochang10@gmail.com</p>
                </div>
                <div className="mb40 mb-xs-24">
                  <h6 className="uppercase mb0">Phone</h6>
                  <p className="fade-half">+1(650)716-8403</p>
                </div>
              </div>
              <div className="col-sm-6 p0">
                <div className="mb40 mb-xs-24">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/alejandro-chang/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.alejandrochang.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Personal Website
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
              <Image
                className="logo"
                src={SowingDevLogo}
                width={100}
                height={75}
                alt="SowingDev Logo"
              />
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
      </footer>
    </div>
  );
};

export default Home;
