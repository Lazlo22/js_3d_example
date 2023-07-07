import { useSnapshot } from 'valtio';
// common
import state from '../store';
import { getContrastingColor } from '../config/helpers';

type CustomButtonType = 'filled' | 'outline';

type CustomButtonProps = {
    type: CustomButtonType;
    title: string;
    customStyles: string;
    handleClick?: () => void;
}

const CustomButton = ({ type, title, customStyles, handleClick }: CustomButtonProps) => {
  const snap = useSnapshot(state);

  const generateStyle = (type: CustomButtonType) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    }
    
    if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;