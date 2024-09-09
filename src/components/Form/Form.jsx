import React, {useCallback, useEffect, useState} from 'react';
import "./Form.css";
import Button from "../Button/Button";
const Form = () => {
    const tg = window.Telegram.WebApp;
    const [inputData, setInputData] = useState({
        cost: {value: ''},
        transport: {value: ''},
        name: {value: ''}
    });

    const onSendData = useCallback(() => {
        tg.sendData(JSON.stringify(inputData));
    }, [inputData]);

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.show();
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

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
        </div>
    );
};

export default Form;