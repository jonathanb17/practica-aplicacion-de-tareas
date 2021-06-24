import React from 'react'

const VisibilityControl = ({ isChechek, descripcion, callback }) => {
    return (
        <div className="form-check">
            <input
                type="checkbox"
                checked={isChechek}
                onChange={e => callback(e.target.checked)}
            />
            <label htmlFor="form-check-label" className="ml-2">
                show {descripcion}
            </label>
        </div>
    )
}

export default VisibilityControl
