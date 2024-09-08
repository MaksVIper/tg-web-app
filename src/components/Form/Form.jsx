import React, {useState} from 'react';
import "./Form.css";
import Button from "../Button/Button";
const Form = () => {
    const tg = window.Telegram.WebApp;
    const [inputData, setInputData] = useState({
        cost: {value: ''},
        transport: {value: ''},
        name: {value: ''}
    });

    const onChangeEvent = (e, name) => {
        setInputData(prevState => {
            return {
                ...prevState,
                [name]: {
                   value: e.target.value,
                }
            }
        })
    }

    const sendData = () => {
        tg.sendData(inputData);
    }
    return (
        <div className="form">
            <label>Стоимость груза</label>
            <input type="text" placeholder="3000000.00" value={inputData.cost.value} onChange={(e) => onChangeEvent(e, 'cost')}/>
            <label>Вид перевозки</label>
            <select value={inputData.transport.value} onChange={(e) => onChangeEvent(e, 'transport')}>
                <option>Автомобильный</option>
                <option>Морской</option>
            </select>
            <label>Наименование груза</label>
            <input type="text" placeholder="Брусья" value={inputData.name.value} onChange={(e) => onChangeEvent(e, 'name')} />
            <Button onClick={sendData}>Оформить</Button>
        </div>
    );
};

export default Form;