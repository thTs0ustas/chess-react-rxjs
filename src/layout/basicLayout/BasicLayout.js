import React from 'react'
import './BasicLayout.css'

function BasicLayout({ children }) {
    return (
        <div className="BasicLayout">
            {children}
        </div>
    );
}

export default BasicLayout;