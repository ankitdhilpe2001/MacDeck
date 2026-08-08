import "./Nav.scss"
import DateTime from './DateTime'

const Nav = () => {
    return (
        <nav>
            <div className="left">
                <div className="apple-icon"><img src="./Nav-icons/apple.svg" alt="apple" /></div>
                <div className="nav-item"><p>Ankit Amon Dhilpe</p></div>
                <div className="nav-item"><p>File</p></div>
                <div className="nav-item"><p>Window</p></div>
                <div className="nav-item"><p>Terminal</p></div>

            </div>
            <div className="right">
                <div className="apple-icon"><img src="./Nav-icons/wifi.svg" alt="wifi" /></div>
                <DateTime/>

            </div>
        </nav>
    )
}

export default Nav