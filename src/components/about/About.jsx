import "./about.css";

const About = () => {
  const descriptionContent = [
    {
      id: 0,
      title: "Frontend Developer with a Passion for User-Centered Design",
      text: (
        <>
          Hello! I'm a <b>Frontend Developer</b> with a strong foundation in
          creating user-friendly, visually appealing, and functional digital
          experiences. I am currently working as a Web Developer at Zummit
          Infolabs, where I design projects in tools like <b>React.js</b>,{" "}
          <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, <b>Tailwind</b> and{" "}
          <b>Figma</b>. My journey into Web Development is deeply rooted in my
          passion for <b>Product Design</b>, which has shaped my ability to
          craft thoughtful and intuitive designs.
        </>
      ),
    },

    {
      id: 1,
      title: "Professional Experience",
      text: (
        <>
          <ul>
            <li>
              <b>Junior Web Developer | Zummit Infolabs </b>- Developing
              projects in React.js and used Tailwind for styling.
            </li>
            <li>
              <b>Intern UI/UX Designer | Zummit Infolabs</b> - Designed Figma
              prototypes for AI Automation websites.
            </li>
            <li>
              <b>Intern Product Designer | S.C. MUSA PITESTI S.R.L.</b> -
              Designed products using CAD/CAM Software.
            </li>
          </ul>
          I began my career as a UI/UX Designer, where I sharpened my ability to
          create interfaces that align with both user needs and business goals.
          This role eventually led me to a Junior Web Developer position at
          Zummit Infolabs, where I expanded my technical expertise in front-end
          development while maintaining a strong emphasis on user experience.
          These roles have enriched my understanding of how design and
          development intersect, enabling me to deliver seamless, impactful
          digital solutions.
        </>
      ),
    },
    {
      id: 2,
      title: "Bridging Product Design and Web Development",
      text: (
        <>
          With a background in <b>Product Design</b>, I've had the privilege of
          working on diverse projects during my studies. From designing everyday
          products to creating mechanical and electronic-based solutions, I
          developed a sharp eye for detail. Some highlights from my academic
          journey include: prototyping modular furniture tailored to specific
          target groups and developing a smart control lamp for individuals with
          disabilities using motion and IR sensors and mobile app control.
          During my academic journey I was also able to master tools like
          CAD/CAM Programs, 3D modeling Softwares and Figma.
          <br></br>
          Driven by a passion for crafting digital products, I transitioned into{" "}
          <b>Web Development</b> and <b>Web Design</b>, taking a comprehensive
          Web Development course to deepen my technical expertise. This step
          allowed me to expand my toolkit and explore the creative potential of
          web technologies.
        </>
      ),
    },
    {
      id: 3,
      title: "My Focus and Aspirations",
      text: (
        <>
          I'm also keen to continue exploring 3D Modeling and Graphic
          Illustration, as they align with my broader design sensibilities.
          Whether it's developing intuitive user interfaces or exploring new
          design technologies, I'm dedicated to creating meaningful digital
          experiences that leave a lasting impression.
        </>
      ),
    },
  ];
  return (
    <section className="about">
      <div className="wrapper">
        <h2 className="about_title">About</h2>
        <div className="about_content">
          {descriptionContent.map(({ id, title, text }) => (
            <div key={id} className="about_div">
              <h3 className="about_header">{title}</h3>
              <div className="about_text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

// {accordionContent.map(({ id, title, text, shorttext, imgsrc }) => ())}
