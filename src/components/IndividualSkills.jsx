/* eslint-disable react/prop-types */

function IndividualSkills({ iconImage, iconName, alt }) {
  return (
    <div className="flex h-[9.4rem] w-[8.8rem] items-center justify-center rounded-[.5rem] bg-gradient-to-tr from-blue-200 from-10% via-green-300 via-60% to-indigo-300 to-90%">
      <div className="flex h-[9rem] w-[8.4rem] flex-col items-center justify-center gap-2 rounded-[.45rem] bg-zinc-900">
        <img className="size-[64px]" src={iconImage} alt={alt} />
        <p className="text-base">{iconName}</p>
      </div>
    </div>
  );
}

export default IndividualSkills;
