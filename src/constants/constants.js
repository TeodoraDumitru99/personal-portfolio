import OverviewMockup from "../components/assets/portfolioImages/Overview Phone Mockup.png";
import GoalPreview from "../components/assets/portfolioImages/Goal Projects Preview.png";
import ResearchOldDesign from "../components/assets/portfolioImages/Research Old Design.png";
import PortfolioHero from "../components/assets/portfolioImages/Portfolio Hero Section.png";
import ProjectStudy from "../components/assets/portfolioImages/Project Case Study.png";
import AboutSection from "../components/assets/portfolioImages/About Section Preview.png";
import DesignImg1 from "../components/assets/portfolioImages/Design Image 1.png";
import DesignImg2 from "../components/assets/portfolioImages/Design Image 2.png";
import DesignImg3 from "../components/assets/portfolioImages/Design Image 3.png";
import DesignImg4 from "../components/assets/portfolioImages/Design Image 4.png";
import Mockup1 from "../components/assets/portfolioImages/Mockup 1.png";
import Mockup2 from "../components/assets/portfolioImages/Mockup 2.png";

export const contentInfo = [
  {
    id: 0,
    section: "Overview",
    contentHasSectionTitle: true,
    contentHasHeader: false,
    text: [
      {
        question: "Why redesign?",
        answer:
          "I decided to redesign my portfolio in order to communicate better my role as a designer and developer, improve readability, and align the visuals with my design philosophy.",
      },
      {
        question: "What is the problem that is being solved?",
        answer: (
          <>
            <p>
              During interviews and feedback sessions, I noticed a few recurring
              issues:
            </p>
            <ul>
              <li>
                Readability - the dark background and saturated colors made text
                harder to scan.
              </li>
              <li>
                Focus - users were more drawn to visuals than the actual content
                and process.
              </li>
              <li>
                Perceived tone - the old design felt more like a “developer
                portfolio” and less like a balanced designer-dev identity.
              </li>
              <li>
                Navigation - some users didn't scroll far enough or missed
                sections due to unclear visual hierarchy.
              </li>
            </ul>
          </>
        ),
      },
    ],

    imgSrc: OverviewMockup,
    imgAlt: "Portfolio Mockup",
  },
  {
    id: 1,
    section: "Goal",
    contentHasSectionTitle: true,
    contentHasHeader: false,
    text: (
      <ul>
        <li>Make the site lighter, cleaner, and easier to scan.</li>
        <li>Improve visual hierarchy and section separation.</li>
        <li>Keep consistency across project pages.</li>
        <li>Reflect both design sensibility and technical skill.</li>
        <li>Ensure responsive behavior and accessibility.</li>
      </ul>
    ),
    imgSrc: GoalPreview,
    imgAlt: "Projects Preview",
  },
  {
    id: 2,
    section: "Research",
    contentHasSectionTitle: true,
    contentHasHeader: false,
    text: (
      <>
        <p>
          I reviewed modern portfolio patterns and analyzed other designers'
          sites on Behance and Dribbble for structure, typography, and
          information flow. I also conducted quick interviews and usability
          testing with peers and mentors
        </p>
        <br></br>
        <p>Feedback highlights:</p>
        <ul>
          <li>“It looks impressive but heavy.”</li>
          <li>“I'd like to see more about your process, not just visuals.”</li>
          <li>“I don't see any case studies”.</li>
        </ul>
      </>
    ),
    imgSrc: ResearchOldDesign,
    imgAlt: "Old Portfolio Design",
  },
  {
    id: 3,
    section: "Solutions",
    header: "Ui direction",
    contentHasSectionTitle: true,
    contentHasHeader: true,
    text: (
      <ul>
        <li>
          Switched from dark purple to a light neutral palette with soft accent
          gradients.
        </li>
        <li>
          Simplified typography with stronger contrasts between headings and
          body text.
        </li>
        <li>Added breathing space (padding, gaps) to create rhythm.</li>
      </ul>
    ),
    imgSrc: PortfolioHero,
    imgAlt: "Portoflio Hero Section",
  },
  {
    id: 4,
    section: "Solutions",
    header: "Structure",
    contentHasSectionTitle: false,
    contentHasHeader: true,
    text: (
      <ul>
        <li>
          Introduced clearer section blocks (Overview, Goal, Research,
          Solution).
        </li>
        <li>Created a consistent project template for all case studies.</li>
        <li>
          Reorganized the homepage to prioritize introduction + featured work.
        </li>
        <li>
          Scalable layout: new design makes it easier to add future projects.
        </li>
      </ul>
    ),
    imgSrc: ProjectStudy,
    imgAlt: "Project Case Study",
  },
  {
    id: 5,
    section: "Solutions",
    header: "Visuals over text",
    contentHasSectionTitle: false,
    contentHasHeader: true,
    text: (
      <ul>
        <li>
          Redesigned the About section, as it had a lot of text related to
          professional background.
        </li>
        <li>
          Started telling stories with more visuals rather than long
          descriptions.
        </li>
        <li>
          Gave as much attention to the section as I did for the case studies.
        </li>
      </ul>
    ),
    imgSrc: AboutSection,
    imgAlt: "About Section",
  },
];

export const portfolioDesignMockups = [
  {
    section: "Design",
    text: "Old vs New design",
    content: [
      { imgId: 0, imgSrc: DesignImg1, imgAlt: "Design Comparison 1" },
      { imgId: 1, imgSrc: DesignImg2, imgAlt: "Design Comparison 2" },
      { imgId: 2, imgSrc: DesignImg3, imgAlt: "Design Comparison 3" },
      { imgId: 3, imgSrc: DesignImg4, imgAlt: "Design Comparison 4" },
    ],
  },
  {
    section: "Mockups",
    text: "See the Portfolio presented on different devices",
    content: [
      { imgId: 0, imgSrc: Mockup1, imgAlt: "Mockup 1" },
      { imgId: 1, imgSrc: Mockup2, imgAlt: "Mockup 2" },
    ],
  },
];
