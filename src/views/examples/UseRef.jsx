import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const merge = function(s1, s2) {
    return [...s1].map(function(e, i) {
        return `${e}${s2[i] || ''}`
    }).join('');
}

const UseRef = (props) => {
    const [ value, setValue ] = useState('');
    const [ secValue, setSecValue ] = useState('');
    const count = useRef(0);

    const firstInput = useRef(null);
    const secondInput = useRef(null);

    useEffect(() => {
        count.current = count.current + 1;
        secondInput.current.focus();
    }, [ value ])

    useEffect(() => {
        count.current++;
        firstInput.current.focus();
    }, [ secValue ])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title={'Exercício #01'}/>
            <div className="center">
                <div>
                    <span className='text'>Valor:</span>
                    <span className="text">{ merge(value, secValue) } [</span>
                    <span className="text red">{ count.current }</span>
                    <span className="text">]</span>
                </div>
                <input 
                    type={'text'}
                    value={value}
                    ref={firstInput}
                    className={'input'}
                    onChange={e => setValue(e.target.value)}
                />
            </div>

            <SectionTitle title={'Exercício #02'} />
            <div className="center">
                <input
                    type={'text'}
                    value={secValue}
                    ref={secondInput}
                    className={'input'}
                    onChange={e => setSecValue(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef;