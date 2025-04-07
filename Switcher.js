import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';

function Switcher() {
    
    const dispatch = useDispatch();
    
    const onChange = () => { 
        dispatch({ type: 'TOGGLE_THEME' });
    }
    
    return <Switch onChange={onChange}/>;
}

export default Switcher;