  import { useNavigate, useLocation } from 'react-router'
    import { useContext } from 'react'
    import { UserContext } from '../App'
  import Google_Login from '../components/Google_Login'
  import icon from '../img/icon.png'

  /*
    This example requires some changes to your config:
    
    ```
    // tailwind.config.js
    module.exports = {
      // ...  
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
  */

  export default function Login() {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    return (
      <>
        
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-orange-300"></div>
          <div className="relative bg-white py-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900 sm:mx-auto sm:max-w-lg sm:w-full sm:rounded-2xl sm:px-10">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-40 w-29"
              src={icon}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action='https://true-connection-server.vercel.app' method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => {
                    
                    if (user.loggedIn) return;
                    setUser ({loggedIn: true})
                    if (location.state?.from) {
                      navigate(location.state.from);
                    }
                    else {
                      navigate('/profile')
                  }
              }}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>

          
        <hr class="mt-6 border-b-1 border-blueGray-300"></hr>
        <div class=" mx-21 signin-separator my-7" style={{display: 'flex', justifyContent: 'center'}}> 
          <span class="font-semibold">- OR -</span>
        </div>
        <Google_Login/>

        <div class="flex flex-wrap mt-6 relative">
          <span class="w-full text-center text-blueGray-500 text-sm"> 
          Don't have an account? <a className=" text-blue-600 hover:text-blue-800" href="#">Register</a> 
          </span>
              
        </div>
              

      </div>
    </div>
        
          
      </>
    )
  }
