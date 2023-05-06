/* 
* @info : Structure of props
Props = {
    label: String;
    icon: SVGAElement;
    isSelected: Boolean;
    ...Other properties
} 
*/

const NavButton = (props) => {
  const fontWeight = props.isSelected ? "font-bold" : "font-normal";
  return (
    <button
      //   style={{ border: "1px solid red" }}
      className={`block w-full text-lg my-8 text-left text-white fonts-montserrat rounded-xl ${fontWeight}`}
    >
      <div>
        {props.icon}
        <span className="ml-4">{props.label}</span>
      </div>
    </button>
  );
};

export default NavButton;
