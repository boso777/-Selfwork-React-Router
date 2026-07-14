export default function Register(){
    return(<>
    <form action="">
        <div>
        <label htmlFor="">Full Name </label>
        <input type="text" />
        </div>
        <div>
        <label htmlFor="">Email Address </label>
        <input type="text" />
        </div>
        <div>
        <label htmlFor="">Password </label>
        <input type="password" />
        </div>
        <div>
        <label htmlFor="">Confirm Password </label>
        <input type="password" />
        </div>
        <button type="submit">Register</button>
        
    </form>
    </>)
}