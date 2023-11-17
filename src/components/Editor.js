import React from "react";

// Define component
const Editor = (props) => {
    return (
        <div className='editor-window' style={(props.active === 'PREVIEWER' && props.style.minimize) || (props.active === 'EDITOR' && props.style.maximize) || {}}>
            <div className='window-header'>
                <p><i className='fa fa-terminal'></i> Editor</p>
                {props.active === 'BOTH' && <button className='btn' onClick={() => props.toggleView('EDITOR')}><i className='fa fa-window-maximize'></i></button>}
                {props.active === 'EDITOR' && <button className='btn' onClick={() => props.toggleView('BOTH')}><i className='fa fa-window-restore'></i></button>}
            </div>
            <textarea style={(props.active === 'EDITOR' && props.style.maximize) || {}} id='editor' value={props.input} onChange={props.handleChange} onKeyDown={props.handleKeyDown}></textarea>
        </div>
    )
}

export default Editor;