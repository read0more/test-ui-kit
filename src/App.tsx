import { useState } from "react";
import styles from "./App.module.scss";
import Button from "./components/Button";
import Input from "./components/Input";
import Textarea from "./components/Textarea";


type IconProps = {
  fillColor?: 'primary' | 'primary-light' | 'primary-dark' | 'white' | 'gray';
}

function Icon({ fillColor = 'white' }: IconProps) {
  let fillColorVarName = '';

  switch (fillColor) {
    case 'primary':
      fillColorVarName = '--primary-color';
      break;
    case 'primary-light':
      fillColorVarName = '--primary-light-color';
      break;
    case 'primary-dark':
      fillColorVarName = '--primary-dark-color';
      break;
    case 'gray':
      fillColorVarName = '--spacer-light-color';
      break;
    case 'white':
    default:
      fillColorVarName = '--white-color';
      break;
  }

  fillColorVarName = `var(${fillColorVarName})`;

  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_1538_706)'>
        <g clip-path='url(#clip1_1538_706)'>
          <path
            d='M13.0254 2.54688H2V15.4531H16V5.52152L13.0254 2.54688ZM12.6914 14.6328H5.30859V10.6133C5.30859 10.3871 5.49259 10.2031 5.71875 10.2031H12.2812C12.5074 10.2031 12.6914 10.3871 12.6914 10.6133V14.6328ZM12.6914 6.92188H5.30859V3.36719H10.5039V6.10156H10.7773H11.3242H11.5977V3.36719H12.6914V6.92188Z'
            fill={fillColorVarName}
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_1538_706'>
          <rect width='18' height='18' fill={fillColorVarName} />
        </clipPath>
        <clipPath id='clip1_1538_706'>
          <rect
            width='14'
            height='14'
            fill={fillColorVarName}
            transform='translate(2 2)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function App() {
  const [value, setValue] = useState('asdasdasd\nasdiajsdpajsd\nasdpiajsd\nasdpiajsd');

  function handleChangeValue(newValue: string) {
    setValue(newValue);
  }

  return (
    <>
    <div className={styles.buttons}>
      <Button type='main' size='medium' Icon={<Icon />} />
      <Button type='secondary' size='large' />
      <Input value={value} setValue={handleChangeValue} size='small' placeholder='Type something' label='Input' Icon={<Icon fillColor="gray" />} error="error." />
      <Textarea value={value} setValue={handleChangeValue} resize placeholder='Type something' isShowTextCounter maxLength={20} />
    </div>
    <a className="link" href="https://www.google.com">Google</a>
    </>
  );
}

export default App;
