import { useState, useEffect } from "react"

export default function 디테일(props) {

    const [자식_디테일, set자식_디테일] = useState('');

    //onLoad 기능
    useEffect(() => {
        set자식_디테일(props.detail);
    }, []);

    return (
        <div>
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
                onClick={() => props.handlerReset()}
            >
                <div style={{
                    width: '100px',
                    height: '50px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {props.detail}
                </div>
            </div>
        </div>
    )
}