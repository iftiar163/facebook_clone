import Meta from "../../components/Meta/Meta"
import "./Auth.scss"


const Auth = () => {
  return (
    <>
        <Meta title={"Facebook - Log in or Sign up"}/>

        <div className="fb-auth-area">
            <div className="fb-container">
                <div className="fb-left-content">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
                    <p>Facebook helps you connect and share with the people in your life.</p>
                </div>
                <div className="fb-right-content">
                    <div className="auth-box">
                        <form action="">
                            <input type="text" placeholder="Email address or phone number"/>
                            <input type="text" placeholder="Password"/>
                            <button>Log in</button>
                            <button>Create New Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Auth