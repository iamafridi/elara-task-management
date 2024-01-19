import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import toast from "react-hot-toast"

const Login = () => {
  const { login, user } = useAuth()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  console.log(user);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const toastId = toast.loading('Logging In')
    try {
      await login(email, password)
      toast.success('Logged In Successfully....', { id: toastId });
      console.log('Logged In Successfully');
      navigate('/')
    } catch (error) {
      console.log(error);
      toast.error(error.message, { id: toastId });

    }

    console.log(email);
    console.log(password);

  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold uppercase"><span className="text-4xl">TODO - DOING - DONE</span> <br />START Here!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
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
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <p className="text-center m-5 text-black">New here ? <Link to='/register' className="font-bold"> Register Here </Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;