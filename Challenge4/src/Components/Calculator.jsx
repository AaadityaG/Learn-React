import './Calculator.css';
import {add, mul, qut, sub, divi} from './Funcs';
export default function Calc(){
    return(
        <ul>
            <li>Sum of two nums = {add(30, 3)}</li>
            <li>Mul of two nums = {mul(30, 3)}</li>
            <li>Div of two nums = {divi(30, 3)}</li>
            <li>Sub of two nums = {sub(30, 3)}</li>
            <li>Sub of two nums = {qut(30, 3)}</li>
        </ul>
    );
}

