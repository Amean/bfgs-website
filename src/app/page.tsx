import Image from 'next/image'
import styles from './page.module.css'


function SideBar() {
  const links = [{
    name: "about",
    link: < a href="#about" > About</a >
  }, {
    name: "apply",
    link: < a href="#apply" > Apply</a >,
  }, {
    name: "meet",
    link: <a href="#meet-us">Meet Us</a>,
  }, {
    name: "donate",
    link: <a href="#donate">Donate</a>,
  }, {
    name: "contact",
    link: <a href = "#contact" > Contact</a >
}];

  const listLinks = links.map(link => <li key={link.name}>{link.link}</li>);

  return (
    <>
      {/* <div className="side-bar">
        <nav className="navigation">
            <Image id="logo" src="images/logo.svg" alt="Logo" />
          <ul>{listLinks}</ul>
        </nav>
    </div> */}
    </>
  );
}

function About() {
  return (
    <section id="about">
      <Image src="/images/burbank.jpg" width={700} height={300} alt="Front of School" />
      <h1>About Luther Burbank First Generation Scholarship</h1>
      <p>This scholarship has been developed as an endowment by IB students from Burbank Class of 2001 as a
          celebration of their 20th reunion. This $1,000 scholarship will be awarded to one student to provide financial support
          and mentorship to first-generation college students. Successful applicants will be highly motivated with a strong desire to succeed and agreeable to participating in the financial literacy program this group of alumni intends to provide as well as the SAISD Foundation remote mentor program.
      </p>
    </section>
  );
}

function Apply() {
  return (
    <>
    </> 
  );
}

function MeetUs() {
  return (
    <>
    </>
  );
}

function Donate() {
  return (
    <>
    </>
  );
}

function Contact() {
  return (
    <>
    </>
  );
}

function MainContent() {
  return (
    <div>
      <About />
      <Apply />
      <MeetUs />
      <Donate />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <SideBar />
      <MainContent />
    </div>

  );
}
