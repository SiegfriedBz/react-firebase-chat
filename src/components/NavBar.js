import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import clsx from 'clsx'
import logo from '../assets/google.png'

const Navbar = ({ user, auth }) => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    const googleSignOut = () => {
        auth.signOut()
    }

    const authBtn = () => {
        const btnClass = clsx('btn btn-sm', {
            'btn-secondary': user,
            'btn-primary': !user
        })
        const handleClick = user ? googleSignOut : googleSignIn
        const text = user ? 'SignOut' : 'SignIn'

        return (
            <button className={btnClass} onClick={handleClick}>
                <img className='rounded-circle me-2' src={logo} width='25px' alt="google logo"/>
                <span>{text}</span>
            </button>
        )
    }

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand fs-3 fw-bold" href="/">React Chat</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-xl-flex justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    {authBtn()}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
