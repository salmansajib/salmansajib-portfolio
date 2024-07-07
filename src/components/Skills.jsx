import IndividualSkills from "./IndividualSkills";
import htmlIcon from "../assets/skill icons/icons8-html5-96.png";
import cssIcon from "../assets/skill icons/icons8-css3-96.png";
import javascriptIcon from "../assets/skill icons/icons8-javascript-96.png";
import tailwindIcon from "../assets/skill icons/icons8-tailwindcss-96.png";
import reactjsIcon from "../assets/skill icons/pngwing.com.png";
import vuejsIcon from "../assets/skill icons/icons8-vuejs-96.png";
import nextjsIcon from "../assets/skill icons/icons8-nextjs-96.png";
import firebaseIcon from "../assets/skill icons/icons8-firebase-96.png";

function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-zinc-950 py-[5rem] text-gray-200"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* ==========  Title ========== */}
        <h2
          style={{
            width: "max-content",
            marginInline: "auto",
          }}
          className="gradient-header text-center uppercase"
        >
          Skills
        </h2>

        {/* ==========  Skills ========== */}
        <div className="mx-auto mt-[5rem] flex max-w-[900px] flex-wrap items-center justify-center gap-4 md:gap-10">
          <IndividualSkills
            iconImage={htmlIcon}
            iconName="HTML"
            alt="html icon"
          />
          <IndividualSkills iconImage={cssIcon} iconName="CSS" alt="css icon" />
          <IndividualSkills
            iconImage={javascriptIcon}
            iconName="JavaScript"
            alt="javascript icon"
          />
          <IndividualSkills
            iconImage={tailwindIcon}
            iconName="TailwindCSS"
            alt="Tailwind css icon"
          />
          <IndividualSkills
            iconImage={reactjsIcon}
            iconName="ReactJs"
            alt="ReactJs icon"
          />
          <IndividualSkills
            iconImage={vuejsIcon}
            iconName="VueJs"
            alt="VueJs icon"
          />
          <IndividualSkills
            iconImage={nextjsIcon}
            iconName="NextJs"
            alt="NextJs icon"
          />
          <IndividualSkills
            iconImage={firebaseIcon}
            iconName="Firebase"
            alt="firebase icon"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
