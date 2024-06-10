/* eslint-disable react/prop-types */
function IndividualSkills({ iconImage, iconName, alt }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(120deg, #bfdbfe 10%,#86efac 60%, #a5b4fc 90%)`,
      }}
      className="flex h-[10.3rem] w-[9.3rem] items-center justify-center rounded-[.5rem]"
    >
      <div className="flex h-[10rem] w-[9rem] flex-col items-center justify-center gap-2 rounded-[.45rem] bg-zinc-900">
        <img className="size-[64px]" src={iconImage} alt={alt} />
        <p className="text-base">{iconName}</p>
      </div>
    </div>
  );
}

export default IndividualSkills;
