import IndividualSkills from './IndividualSkills';
import htmlIcon from '../assets/skill icons/icons8-html5-96.png';
import cssIcon from '../assets/skill icons/icons8-css3-96.png';
import javascriptIcon from '../assets/skill icons/icons8-javascript-96.png';
import tailwindIcon from '../assets/skill icons/icons8-tailwindcss-96.png';
import reactjsIcon from '../assets/skill icons/pngwing.com.png';
import nextjsIcon from '../assets/skill icons/icons8-nextjs-96.png';
import firebaseIcon from '../assets/skill icons/icons8-firebase-96.png';

function Skills() {
  return (
    <section className=' w-full bg-zinc-950 text-gray-200 py-[7rem] '>
      <div className=' w-full max-w-[1200px] mx-auto '>
        <h2 className=' gradient-header text-center '>Skills</h2>
        <div className=' max-w-[900px] mx-auto flex flex-wrap gap-5 md:gap-10 items-center justify-center mt-[5rem] '>
          <IndividualSkills
            iconImage={htmlIcon}
            iconName='HTML'
            alt='html icon'
          />
          <IndividualSkills iconImage={cssIcon} iconName='CSS' alt='css icon' />
          <IndividualSkills
            iconImage={javascriptIcon}
            iconName='JavaScript'
            alt='javascript icon'
          />
          <IndividualSkills
            iconImage={tailwindIcon}
            iconName='TailwindCSS'
            alt='javascript icon'
          />
          <IndividualSkills
            iconImage={reactjsIcon}
            iconName='ReactJs'
            alt='ReactJs icon'
          />
          <IndividualSkills
            iconImage={nextjsIcon}
            iconName='NextJs'
            alt='NextJs icon'
          />
          <IndividualSkills
            iconImage={firebaseIcon}
            iconName='Firebase'
            alt='firebase icon'
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
