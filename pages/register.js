import Head from 'next/head'
import Link from 'next/link'

const Register = () => {
 return (
  <div>
   <Head>
    <title>
     Register page
    </title>
   </Head>
   <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
    <div className="form-group">
     <label htmlFor="exampleInputEmail1">Email address</label>
     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
     <label htmlFor="exampleInputPassword1">Password</label>
     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>

    <button type="submit" className="btn btn-dark w-100">Register</button>
    <p className="my-2">Already Have an account?
    <Link href="/signin">
      <a style={{ color: "crimson" }}> Login</a>
     </Link>
    </p>
   </form>
  </div>
 )
}
export default Register

