/* eslint-disable react/prop-types */
function IndividualSkills({ iconImage, iconName, alt }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(120deg, #bfdbfe 10%,#86efac 60%, #a5b4fc 90%)`,
      }}
      className=' w-[9.3rem] h-[10.3rem] flex items-center justify-center rounded-md '
    >
      <div className=' bg-zinc-900 w-[9rem] h-[10rem] flex gap-2 flex-col items-center justify-center rounded-md '>
        <img className=' w-[64px] h-[64px] ' src={iconImage} alt={alt} />
        <p className=' text-base '>{iconName}</p>
      </div>
    </div>
  );
}

export default IndividualSkills;
