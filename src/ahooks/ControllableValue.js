import React, { useState } from 'react';
// import { useControllableValue } from 'ahooks';

function useControllableValue({ value, onChange }, { defaultValue }) {

    const [state,setState] = useState(value??defaultValue)

    return [state, setState]
}

function ControllableValue(props) {
    const [state, setState] = useControllableValue(props, {
        defaultValue: '',
    });

    return (
        <>
            <input value={state} onChange={(e) => setState(e.target.value)} style={{ width: 300 }} />
            <button type="button" onClick={() => setState('')} style={{ marginLeft: 8 }}>
                Clear
            </button>
            <div>{state}</div>
        </>
    );
};

const ControllableComponent = (props) => {
    const [state, setState] = useControllableValue(props, {
        defaultValue: "123"
    });

    console.log(state)

    return <input value={state} onChange={(e) => setState(e.target.value)} style={{ width: 300 }} />;
};

const Parent = () => {
    const [state, setState] = useState('');
    const clear = () => {
        setState('');
    };

    return (
        <>
            <ControllableComponent  onChange={setState} />
            <button type="button" onClick={clear} style={{ marginLeft: 8 }}>
                Clear
            </button>
        </>
    );
};

export default Parent