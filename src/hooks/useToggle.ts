import { useState } from 'react';

const useToggle = (param: boolean = true) => {
  const [value, setValue] = useState<boolean>(param);

  const toggleValue = () => {
    setValue((prevValue) => !prevValue);
  };

  return {
    value,
    toggleValue,
  };
};

export default useToggle;
