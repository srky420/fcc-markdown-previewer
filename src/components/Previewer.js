import React from "react";
import parse from 'html-react-parser';

// Define component
const Previewer = (props) => {
    return (
        <div className='preview-window' style={(props.active === 'EDITOR' && props.style.minimize) || (props.active === 'PREVIEWER' && props.style.maximize) || {}}>
            <div className='window-header'>
                <p><i className='fa fa-code'></i> Previewer</p>
                {props.active === 'BOTH' && <button className='btn' onClick={() => props.toggleView('PREVIEWER')}><i className='fa fa-window-maximize'></i></button>}
                {props.active === 'PREVIEWER' && <button className='btn' onClick={() => props.toggleView('BOTH')}><i className='fa fa-window-restore'></i></button>}
            </div>
            <div className='preview-inner' id='preview'>
                { parse(props.html) }
            </div>
        </div>
    )
}

export default Previewer;