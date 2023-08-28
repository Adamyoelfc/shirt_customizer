import { getContrastingColor } from "../config/helpers";
import state from "../store";
import { useSnapshot } from "valtio";

function CustomButton({ title, type, customStyle, handleClick }) {
  const snap = useSnapshot(state);
  const generalStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if(type==='outline') {
      return {
        borderwidth: '1px',
        bordercolor: snap.color,
        color: snap.color
      }
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
      style={generalStyle(type)} 
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
