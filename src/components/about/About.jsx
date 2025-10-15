import "./about.css";
import ProfilePicture from "../assets/aboutImages/Profile Image.png";
import StarPointImg from "../assets/profileImages/star point.png";
import Technologies from "../technologies/Technologies";

const About = () => {
  const contactIcons = [
    {
      id: 0,
      href: 'mailto:teodoradumitru1999@gmail.com target="_blank',
      path: "M30.7832 0.171875C44.9252 0.171875 51.9964 0.172019 56.3896 4.56543C60.783 8.95882 60.7832 16.0299 60.7832 30.1719C60.7832 44.3138 60.7831 51.3851 56.3896 55.7783C51.9964 60.1717 44.9251 60.1719 30.7832 60.1719C16.6412 60.1719 9.57015 60.1717 5.17676 55.7783C0.783363 51.3851 0.783203 44.3138 0.783203 30.1719C0.783203 16.0298 0.783424 8.95882 5.17676 4.56543C9.57014 0.17202 16.6411 0.171875 30.7832 0.171875ZM19.4844 46.1514C18.1037 46.1514 16.9844 47.2707 16.9844 48.6514C16.9845 50.032 18.1037 51.1514 19.4844 51.1514H43.3145C44.6951 51.1514 45.8143 50.032 45.8145 48.6514C45.8145 47.2707 44.6952 46.1514 43.3145 46.1514H19.4844ZM30.7832 13.3418C29.4026 13.3418 28.2834 14.4612 28.2832 15.8418V31.6719L24.0664 27.4551C23.0901 26.4788 21.5076 26.4788 20.5312 27.4551C19.5549 28.4314 19.555 30.0139 20.5312 30.9902L29.0156 39.4746C29.0738 39.5328 29.1346 39.5884 29.1982 39.6406C29.2215 39.6597 29.2467 39.6762 29.2705 39.6943C29.3107 39.725 29.3505 39.756 29.3926 39.7842C29.4323 39.8108 29.4738 39.8343 29.5146 39.8584C29.5433 39.8753 29.5712 39.8934 29.6006 39.9092C29.6495 39.9355 29.6997 39.9586 29.75 39.9814C29.7729 39.9919 29.7951 40.0039 29.8184 40.0137C29.8684 40.0346 29.9196 40.0518 29.9707 40.0693C29.9968 40.0783 30.0224 40.0886 30.0488 40.0967C30.1013 40.1127 30.1548 40.1242 30.208 40.1367C30.2357 40.1433 30.263 40.1516 30.291 40.1572C30.296 40.1582 30.3007 40.1602 30.3057 40.1611C30.3516 40.17 30.398 40.1753 30.4443 40.1816C30.4726 40.1855 30.5007 40.1915 30.5293 40.1943C30.5339 40.1948 30.5384 40.1959 30.543 40.1963C30.705 40.2119 30.8683 40.2103 31.0303 40.1943H31.0391C31.0506 40.1932 31.0618 40.1898 31.0732 40.1885C31.141 40.1806 31.2084 40.1706 31.2754 40.1572C31.3005 40.1522 31.3248 40.1444 31.3496 40.1387C31.4052 40.1258 31.4609 40.1134 31.5156 40.0967C31.5318 40.0917 31.5474 40.0853 31.5635 40.0801C31.6054 40.0663 31.6472 40.0522 31.6885 40.0361C31.7063 40.0292 31.7245 40.023 31.7422 40.0156C31.7439 40.0149 31.7453 40.0134 31.7471 40.0127C31.7705 40.0029 31.7933 39.9919 31.8164 39.9814C31.866 39.9589 31.9155 39.9361 31.9639 39.9102C31.986 39.8983 32.0066 39.8836 32.0283 39.8711C32.0551 39.8557 32.0821 39.8407 32.1084 39.8242C32.1249 39.8139 32.1429 39.8057 32.1592 39.7949C32.1642 39.7916 32.1679 39.7865 32.1729 39.7832C32.208 39.7597 32.2416 39.7342 32.2754 39.709C32.3037 39.6879 32.3338 39.669 32.3613 39.6465C32.3642 39.6442 32.3663 39.641 32.3691 39.6387C32.4322 39.5868 32.4931 39.5323 32.5508 39.4746L41.0352 30.9902C42.0114 30.0139 42.0115 28.4314 41.0352 27.4551C40.0589 26.4788 38.4763 26.4788 37.5 27.4551L33.2832 31.6719V15.8418C33.2831 14.4612 32.1638 13.3418 30.7832 13.3418Z",
    },
    {
      id: 1,
      href: 'mailto:teodoradumitru1999@gmail.com target="_blank',
      path: "M3.51471 4.39339C2.38419e-07 8.78681 0 15.8579 0 30C0 44.142 2.38419e-07 51.2134 3.51471 55.6065C7.02945 60 12.6863 60 24 60H36C47.3136 60 52.9707 60 56.4852 55.6065C60 51.2134 60 44.142 60 30C60 15.8579 60 8.78681 56.4852 4.39339C52.9707 -4.76837e-07 47.3136 0 36 0H24C12.6863 0 7.02945 -4.76837e-07 3.51471 4.39339ZM49.7286 13.1995C50.5239 14.3928 50.3949 16.1662 49.4403 17.1606L42.8511 24.0248C40.1919 26.7945 38.0367 29.0396 36.1344 30.5689C34.1529 32.1619 32.2233 33.1684 30 33.1684C27.7767 33.1684 25.8471 32.1619 23.8655 30.5689C21.9634 29.0396 19.8081 26.7945 17.1491 24.0248L10.5596 17.1606C9.60495 16.1662 9.47598 14.3928 10.2715 13.1995C11.067 12.0062 12.4858 11.845 13.4404 12.8394L19.9171 19.5859C22.716 22.5015 24.6591 24.519 26.2998 25.8379C27.8877 27.1147 28.9647 27.5434 30 27.5434C31.0353 27.5434 32.1123 27.1147 33.7002 25.8379C35.3409 24.519 37.284 22.5015 40.083 19.5859L46.5597 12.8394C47.5143 11.845 48.933 12.0062 49.7286 13.1995Z",
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/teodora-dumitru/",
      path: "M30 0C44.142 0 51.2132 0.000144482 55.6064 4.39355C59.9999 8.78694 60 15.8579 60 30C60 44.142 59.9999 51.2132 55.6064 55.6064C51.2132 59.9999 44.142 60 30 60C15.8579 60 8.78694 59.9999 4.39355 55.6064C0.000144482 51.2132 0 44.142 0 30C0 15.8579 0.000144679 8.78694 4.39355 4.39355C8.78694 0.000144679 15.8579 0 30 0ZM15.7676 25.0605V43.7754H21.6152V25.0605H15.7676ZM37.5879 24.8848C34.2363 24.8848 32.1387 26.7129 31.752 28.002V25.0605H25.1777C25.2598 26.619 25.1778 43.7714 25.1777 43.7754H31.752V33.6621C31.752 33.0879 31.7285 32.5254 31.8926 32.127C32.3379 31.002 33.3105 29.8301 35.0566 29.8301C37.3418 29.8301 38.373 31.5645 38.373 34.0957V43.7754H45.0059V33.3691C45.0059 27.5801 41.748 24.8848 37.5879 24.8848ZM18.5684 16.2246C16.4121 16.2246 14.9941 17.6191 14.9941 19.4707C14.9941 21.2871 16.3652 22.7168 18.4863 22.7168H18.5332C20.7363 22.7168 22.1074 21.2754 22.0957 19.4707C22.0488 17.6191 20.7246 16.2246 18.5684 16.2246Z",
    },
    {
      id: 3,
      href: "https://github.com/TeodoraDumitru99",
      path: "M30 0C46.5689 0 59.9999 13.7698 59.9999 30.7588C59.9999 44.3457 51.4139 55.8718 39.501 59.9428C37.98 60.2458 37.44 59.2852 37.44 58.4662C37.44 57.4522 37.4759 54.1404 37.4759 50.0244C37.4759 47.1564 36.516 45.2845 35.439 44.3305C42.12 43.5685 49.1399 40.9673 49.1399 29.1533C49.1399 25.7933 47.9759 23.0514 46.0499 20.8974C46.3619 20.1204 47.3909 16.9918 45.7559 12.7558C45.7559 12.7558 43.2419 11.9317 37.5149 15.9096C35.118 15.2287 32.55 14.886 30 14.874C27.45 14.886 24.885 15.2287 22.491 15.9096C16.758 11.9317 14.238 12.7558 14.238 12.7558C12.609 16.9918 13.638 20.1204 13.947 20.8974C12.03 23.0514 10.857 25.7933 10.857 29.1533C10.857 40.9373 17.862 43.5784 24.525 44.3554C23.667 45.1234 22.89 46.4782 22.62 48.4672C20.91 49.2532 16.566 50.6135 13.89 45.9125C13.89 45.9125 12.303 42.9572 9.29099 42.7412C9.29099 42.7412 6.36599 42.7023 9.08699 44.6103C9.08699 44.6103 11.052 45.5553 12.417 49.1103C12.417 49.1103 14.178 54.6002 22.524 52.7402C22.539 55.3112 22.566 57.7342 22.566 58.4662C22.566 59.2792 22.014 60.2307 20.517 59.9457C8.59498 55.8807 0 44.3487 0 30.7588C0 13.7698 13.434 0 30 0Z",
    },
  ];

  const experienceInfo = [
    {
      id: 0,
      title: "Junior Web Developer | Zummit Infolabs",
      description:
        "Developed frontend interfaces for Al-based learning and training platforms.",
      duration: "10/2024 - Present",
    },
    {
      id: 1,
      title: "Intern UI/UX Designer | Zummit Infolabs",
      description:
        "Designed interface layouts and prototypes for AI-based platforms.",
      duration: "04/2024 - 10/2024",
    },
    {
      id: 2,
      title: "Intern Product Designer | S.C.MUSA PITESTI S.R.L.",
      description: "Designed products using CAD/CAM Software.",
      duration: "06/2022 - 09/2022",
    },
  ];

  const pointText = (item) => (
    <div key={item.id} className="container_row_start">
      <img
        className="profile_star"
        loading="lazy"
        src={StarPointImg}
        alt="Star Point Icon"
      />
      <div className="container_column about_experience_item">
        <h5 className="heading3 point_question">{item.title}</h5>
        <p className="point_answer body_text">{item.description}</p>
        <span className="about_point_duration">{item.duration}</span>
      </div>
    </div>
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Teodora Dumitru_Resume.pdf";
    link.download = "Teodora Dumitru_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about">
      <div className="wrapper">
        <div className="route_content">
          <div className="container_row_center about_profile">
            <div className="container_column about_profile_contact">
              <h2 className="heading1 route_heading about_heading">
                Teodora Dumitru
              </h2>
              <h3 className="heading3 about_heading3">
                <span>UI/UX Designer &</span> <span>Frontend Developer</span>
              </h3>
              <div className="about_contact">
                {contactIcons.map(({ id, href, path }) => (
                  <div key={id}>
                    <a
                      href={id === 0 ? "#" : href}
                      rel="noopener no referrer"
                      onClick={id === 0 ? handleDownload : undefined}
                    >
                      <svg
                        className="about_contact_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 61 61"
                        width="60"
                        height="60"
                        fill="black"
                      >
                        <path d={path} />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <img
              className="about_profile_img"
              loading="lazy"
              src={ProfilePicture}
              alt="Profile Picture"
            />
          </div>
          <div className="about_experience container_column">
            <h2 className="heading2 container_heading">Experience</h2>
            <div className="about_experience_content container_row_between">
              <div className="container_column about_experience_column1">
                <span className="route profile_route" onClick={handleDownload}>
                  RESUME
                </span>
                {pointText(experienceInfo[0])}
              </div>
              <div className="container_column about_experience_column2">
                {experienceInfo.slice(1).map(pointText)}
              </div>
            </div>
          </div>
          <div className="about_technologies">
            <h2 className="heading2 container_heading">Technologies</h2>
            <Technologies />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
