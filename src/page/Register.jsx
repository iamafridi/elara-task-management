import { useState } from "react"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Register = () => {
  const { createUser, user } = useAuth()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  console.log(user);


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createUser( email, password)
      console.log('Created');

    } catch (error) {
      console.log(error);

    }

    console.log(email);
    console.log(password);
    console.log(name);

  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold uppercase"><span className="text-4xl">Be A Part Of The Team</span> <br />Register Here!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="name"
                placeholder=" Your Name"
                className="input input-bordered"
                required
                onBlur={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email"
                placeholder="email"
                className="input input-bordered"
                required
                onBlur={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password"
                placeholder="password"
                className="input input-bordered"
                required
                onBlur={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register Now</button>
            </div>
            <p className="text-center m-5 text-black">Already have an account ? <Link to='/login' className="font-bold"> Login Here </Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register