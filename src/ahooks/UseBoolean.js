import React, { useState, useMemo } from 'react';
import { useBoolean } from 'ahooks';

export default function UseBoolean() {
    const [state, { toggle, setTrue, setFalse }] = useBoolean(true);

    return (
        <div>
            <p>Effects：{JSON.stringify(state)}</p>
            <p>
                <Com1 toggle={toggle} />
                <button type="button" onClick={setFalse} style={{ margin: '0 16px' }}>
                    Set false
                </button>
                <button type="button" onClick={setTrue}>
                    Set true
                </button>
            </p>
        </div>
    );
};



const Com1 = React.memo(function Com1(props) {
    return <button type="button" onClick={props.toggle}>
        Toggle
    </button>
})