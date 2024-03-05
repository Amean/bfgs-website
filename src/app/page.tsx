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
      <div className="side-bar">
        <nav className="navigation">
            <Image id="logo" src="images/logo.svg" alt="Logo" />
          <ul>{listLinks}</ul>
        </nav>
    </div>
    </>
  );
}

function About() {
  return (
    <>
    </>
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
    <>
      <About />
      <Apply />
      <MeetUs />
      <Donate />
      <Contact />
    </>
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
