import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
        <div className="footer">
            <img id="avatar" src="https://i.pravatar.cc/30" alt="" />
            <div>
                <p className="guest-name">Guest</p>
                <p className="tag">#0001</p>
            </div>
        </div>
    )
}

export default Footer
