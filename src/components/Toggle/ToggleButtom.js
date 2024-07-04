import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../actions/themeActions';

const ToggleButtom = () => {
    const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme])
  return (
    <button onClick={handleToggle}>
    Toggle Theme
  </button>
  )
}

export default ToggleButtom
