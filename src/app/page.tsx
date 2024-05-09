'use client';
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
            {/* <Image src="images/logo.svg" alt="Logo" /> */}
          <ul>{listLinks}</ul>
        </nav>
    </div>
    </>
  );
}

function About() {
  return (
    <section>
      <Image src="/images/burbank.jpg" width={700} height={300} alt="Front of School" />
      <h1>About Luther Burbank First Generation Scholarship</h1>
      <p>This scholarship has been developed as an endowment by IB students from Burbank Class of 2001 as a
          celebration of their 20th reunion. This $1,000 scholarship will be awarded to one student to provide financial support
          and mentorship to first-generation college students. Successful applicants will be highly motivated with a strong desire to succeed and agreeable to participating in the financial literacy program this group of alumni intends to provide as well as the SAISD Foundation remote mentor program.
      </p>
    </section>
  );
}

function Button() {
  // function handleClick() {
  //   window.open('https://www.saisdfoundation.com/');
  // }

  return (
    <button onClick={() => location.href = 'https://www.saisdfoundation.com/'}>
      Apply
    </button>
  );
}

function Apply() {
  return (
    <section>
      <h1>Who Can Apply</h1>
      <p>Top 25% of graduating class from Burbank High School; minority; first-generation
          college student
          with the intent to attend a four-year college/university; and demonstrated need.</p>
      <h1>How To Apply</h1>
      <p>Applications are accepted through the link below</p>
      <Button />
    </section> 
  );
}

function MeetUs() {
  return (
    <section>
      <Image src="/images/group_pic.jpg" width={500} height={300} alt="Group Picture" />
      <h1>Past Winners</h1>
      <div className="wrapper-winners">
          <div className="cell">
          <Image className="person" src="/images/peyton_gamez.png" width={50} height={50} alt="Peyton Gamez" />
              <h2>Peyton Gamez</h2>
              <p>This cooll person won the scholarship for the class of blah blah blah. This person went on to do
                  this thing all becuase
                  of this scholarship. Fun cool facts about this person include how cool they are.</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/chris_mendez.png" width={50} height={50}alt="Chris Mendez" />
              <h2>Chris Mendez</h2>
              <p>This cooll person won the scholarship for the class of blah blah blah. This person went on to do
                  this thing all becuase of this scholarship. Fun cool facts about this person include how cool
                  they are.</p>
          </div>

      </div>
      <h1>Scholarship Team</h1>
      <div className="wrapper-team">
          <div className="cell">
              <Image className="person" src="/images/peyton_gamez.png" width={50} height={50}alt="" />
              <h2>Ana Sanchez</h2>
              <p>Founder of Scholarship</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/chris_mendez.png" width={50} height={50} alt="" />
              <h2>Liza Garcia</h2>
              <p>Founder of Scholarship</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/peyton_gamez.png" width={50} height={50}alt="" />
              <h2>Gregory Kitchen</h2>
              <p>Founder of Scholarship</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/peyton_gamez.png" width={50} height={50}alt="" />
              <h2>Enrique Loera</h2>
              <p>Founder of Scholarship</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/chris_mendez.png" width={50} height={50}alt="" />
              <h2>Vanessa Gonzalez</h2>
              <p>Founder of Scholarship</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/peyton_gamez.png" width={50} height={50}alt="" />
              <h2>Martin Vegara</h2>
              <p>Founder of Scholarship</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/peyton_gamez.png" width={50} height={50}alt="" />
              <h2>Ahmad Khazee</h2>
              <p>Founder of Scholarship</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/chris_mendez.png" width={50} height={50}alt="" />
              <h2>David Gomez</h2>
              <p>Founder of Scholarship</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/peyton_gamez.png" width={50} height={50}alt="" />
              <h2>Maria Mendoza-Reyna</h2>
              <p>Founder of Scholarship</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/peyton_gamez.png" width={50} height={50}alt="" />
              <h2>David DeLeon</h2>
              <p>Founder of Scholarship</p>
          </div>
          <div className="cell">
              <Image className="person" src="/images/chris_mendez.png" width={50} height={50}alt="" />
              <h2>Ralphie Baylor</h2>
              <p>Founder of Scholarship</p>
          </div>
      </div>
  </section>
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
