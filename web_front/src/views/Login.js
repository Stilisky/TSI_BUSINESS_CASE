import React, { useState } from "react";
import basketball from '../assets/images/basketball.svg'
import { useNavigate } from "react-router-dom";

const Login = () => {
   const [error, setError] = useState(null)
   const [pass, setPass] = useState(null)
   const [email, setEmail] = useState(null)
   const navigation = useNavigate()

   const handleSubmit = async () => {
      try {
        const request = {
            email: email,
            password: pass
        }
        const url = `${process.env.REACT_APP_API_URL}/api/v1/auth/login`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        if(response.ok){
          const data = await response.json()
          localStorage.setItem('token', data.acces_token)
          navigation('/dashboard')
        }
      } catch (error) {
         setError(error.message)
      }
   }
  return (
    <>
      <section className="bg-fixed h-screen ">
        <div className="bg-white relative">
          <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-5xl xl:px-5 lg:flex-row">
            <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
              <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                  <img src={basketball} alt="register" />
                </div>
              </div>
              <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                <div>
                  <div
                    className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
                  >
                    <div className="relative w-full">
                      <a href="/" className="absolute -top-7 -right-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </a>
                      <p className="w-full text-4xl mb-2 font-medium text-center leading-snug font-serif">
                        LOGIN
                      </p>
                    </div>
                    {error && (
                      <p className="text-red-500 text-center text-sm">
                        {error}
                      </p>
                    )}

                    <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                      
                      <div className="relative">
                        <p
                          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                        >
                          Email
                        </p>
                        <input
                          placeholder="John@gmail.com"
                          className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                          id="email"
                          type="email"
                          name="email"
                          onChange={(mail) => setEmail(mail.target.value)}
                        />
                      </div>

                      <div className="relative">
                        <p
                          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                        >
                          Password
                        </p>
                        <input
                          placeholder="Password"
                          type="password"
                          className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                          id="password"
                          name="password"
                          onChange={(mdp) => {setPass(mdp.target.value)}}
                        />
                      </div>
                      
                      <div className="relative">
                        <button
                          onClick={handleSubmit}
                          className=" w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Submit
                        </button>
                      </div>
                      <div>
                        <p className="text-center my-4">
                          <a
                            href="/register"
                            className="text-red-500 text-sm hover:underline"
                          >
                            Create an account !
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <svg
                  viewbox="0 0 91 91"
                  class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
            fill-current"
                >
                  <g stroke="none" strokewidth="1" fillrule="evenodd">
                    <g fillrule="nonzero">
                      <g>
                        <g>
                          <circle cx="3.261" cy="3.445" r="2.72" />
                          <circle cx="15.296" cy="3.445" r="2.719" />
                          <circle cx="27.333" cy="3.445" r="2.72" />
                          <circle cx="39.369" cy="3.445" r="2.72" />
                          <circle cx="51.405" cy="3.445" r="2.72" />
                          <circle cx="63.441" cy="3.445" r="2.72" />
                          <circle cx="75.479" cy="3.445" r="2.72" />
                          <circle cx="87.514" cy="3.445" r="2.719" />
                        </g>
                        <g transform="translate(0 12)">
                          <circle cx="3.261" cy="3.525" r="2.72" />
                          <circle cx="15.296" cy="3.525" r="2.719" />
                          <circle cx="27.333" cy="3.525" r="2.72" />
                          <circle cx="39.369" cy="3.525" r="2.72" />
                          <circle cx="51.405" cy="3.525" r="2.72" />
                          <circle cx="63.441" cy="3.525" r="2.72" />
                          <circle cx="75.479" cy="3.525" r="2.72" />
                          <circle cx="87.514" cy="3.525" r="2.719" />
                        </g>
                        <g transform="translate(0 24)">
                          <circle cx="3.261" cy="3.605" r="2.72" />
                          <circle cx="15.296" cy="3.605" r="2.719" />
                          <circle cx="27.333" cy="3.605" r="2.72" />
                          <circle cx="39.369" cy="3.605" r="2.72" />
                          <circle cx="51.405" cy="3.605" r="2.72" />
                          <circle cx="63.441" cy="3.605" r="2.72" />
                          <circle cx="75.479" cy="3.605" r="2.72" />
                          <circle cx="87.514" cy="3.605" r="2.719" />
                        </g>
                        <g transform="translate(0 36)">
                          <circle cx="3.261" cy="3.686" r="2.72" />
                          <circle cx="15.296" cy="3.686" r="2.719" />
                          <circle cx="27.333" cy="3.686" r="2.72" />
                          <circle cx="39.369" cy="3.686" r="2.72" />
                          <circle cx="51.405" cy="3.686" r="2.72" />
                          <circle cx="63.441" cy="3.686" r="2.72" />
                          <circle cx="75.479" cy="3.686" r="2.72" />
                          <circle cx="87.514" cy="3.686" r="2.719" />
                        </g>
                        <g transform="translate(0 49)">
                          <circle cx="3.261" cy="2.767" r="2.72" />
                          <circle cx="15.296" cy="2.767" r="2.719" />
                          <circle cx="27.333" cy="2.767" r="2.72" />
                          <circle cx="39.369" cy="2.767" r="2.72" />
                          <circle cx="51.405" cy="2.767" r="2.72" />
                          <circle cx="63.441" cy="2.767" r="2.72" />
                          <circle cx="75.479" cy="2.767" r="2.72" />
                          <circle cx="87.514" cy="2.767" r="2.719" />
                        </g>
                        <g transform="translate(0 61)">
                          <circle cx="3.261" cy="2.846" r="2.72" />
                          <circle cx="15.296" cy="2.846" r="2.719" />
                          <circle cx="27.333" cy="2.846" r="2.72" />
                          <circle cx="39.369" cy="2.846" r="2.72" />
                          <circle cx="51.405" cy="2.846" r="2.72" />
                          <circle cx="63.441" cy="2.846" r="2.72" />
                          <circle cx="75.479" cy="2.846" r="2.72" />
                          <circle cx="87.514" cy="2.846" r="2.719" />
                        </g>
                        <g transform="translate(0 73)">
                          <circle cx="3.261" cy="2.926" r="2.72" />
                          <circle cx="15.296" cy="2.926" r="2.719" />
                          <circle cx="27.333" cy="2.926" r="2.72" />
                          <circle cx="39.369" cy="2.926" r="2.72" />
                          <circle cx="51.405" cy="2.926" r="2.72" />
                          <circle cx="63.441" cy="2.926" r="2.72" />
                          <circle cx="75.479" cy="2.926" r="2.72" />
                          <circle cx="87.514" cy="2.926" r="2.719" />
                        </g>
                        <g transform="translate(0 85)">
                          <circle cx="3.261" cy="3.006" r="2.72" />
                          <circle cx="15.296" cy="3.006" r="2.719" />
                          <circle cx="27.333" cy="3.006" r="2.72" />
                          <circle cx="39.369" cy="3.006" r="2.72" />
                          <circle cx="51.405" cy="3.006" r="2.72" />
                          <circle cx="63.441" cy="3.006" r="2.72" />
                          <circle cx="75.479" cy="3.006" r="2.72" />
                          <circle cx="87.514" cy="3.006" r="2.719" />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <svg
                  viewbox="0 0 91 91"
                  class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
            fill-current"
                >
                  <g stroke="none" strokewidth="1" fillrule="evenodd">
                    <g fillrule="nonzero">
                      <g>
                        <g>
                          <circle cx="3.261" cy="3.445" r="2.72" />
                          <circle cx="15.296" cy="3.445" r="2.719" />
                          <circle cx="27.333" cy="3.445" r="2.72" />
                          <circle cx="39.369" cy="3.445" r="2.72" />
                          <circle cx="51.405" cy="3.445" r="2.72" />
                          <circle cx="63.441" cy="3.445" r="2.72" />
                          <circle cx="75.479" cy="3.445" r="2.72" />
                          <circle cx="87.514" cy="3.445" r="2.719" />
                        </g>
                        <g transform="translate(0 12)">
                          <circle cx="3.261" cy="3.525" r="2.72" />
                          <circle cx="15.296" cy="3.525" r="2.719" />
                          <circle cx="27.333" cy="3.525" r="2.72" />
                          <circle cx="39.369" cy="3.525" r="2.72" />
                          <circle cx="51.405" cy="3.525" r="2.72" />
                          <circle cx="63.441" cy="3.525" r="2.72" />
                          <circle cx="75.479" cy="3.525" r="2.72" />
                          <circle cx="87.514" cy="3.525" r="2.719" />
                        </g>
                        <g transform="translate(0 24)">
                          <circle cx="3.261" cy="3.605" r="2.72" />
                          <circle cx="15.296" cy="3.605" r="2.719" />
                          <circle cx="27.333" cy="3.605" r="2.72" />
                          <circle cx="39.369" cy="3.605" r="2.72" />
                          <circle cx="51.405" cy="3.605" r="2.72" />
                          <circle cx="63.441" cy="3.605" r="2.72" />
                          <circle cx="75.479" cy="3.605" r="2.72" />
                          <circle cx="87.514" cy="3.605" r="2.719" />
                        </g>
                        <g transform="translate(0 36)">
                          <circle cx="3.261" cy="3.686" r="2.72" />
                          <circle cx="15.296" cy="3.686" r="2.719" />
                          <circle cx="27.333" cy="3.686" r="2.72" />
                          <circle cx="39.369" cy="3.686" r="2.72" />
                          <circle cx="51.405" cy="3.686" r="2.72" />
                          <circle cx="63.441" cy="3.686" r="2.72" />
                          <circle cx="75.479" cy="3.686" r="2.72" />
                          <circle cx="87.514" cy="3.686" r="2.719" />
                        </g>
                        <g transform="translate(0 49)">
                          <circle cx="3.261" cy="2.767" r="2.72" />
                          <circle cx="15.296" cy="2.767" r="2.719" />
                          <circle cx="27.333" cy="2.767" r="2.72" />
                          <circle cx="39.369" cy="2.767" r="2.72" />
                          <circle cx="51.405" cy="2.767" r="2.72" />
                          <circle cx="63.441" cy="2.767" r="2.72" />
                          <circle cx="75.479" cy="2.767" r="2.72" />
                          <circle cx="87.514" cy="2.767" r="2.719" />
                        </g>
                        <g transform="translate(0 61)">
                          <circle cx="3.261" cy="2.846" r="2.72" />
                          <circle cx="15.296" cy="2.846" r="2.719" />
                          <circle cx="27.333" cy="2.846" r="2.72" />
                          <circle cx="39.369" cy="2.846" r="2.72" />
                          <circle cx="51.405" cy="2.846" r="2.72" />
                          <circle cx="63.441" cy="2.846" r="2.72" />
                          <circle cx="75.479" cy="2.846" r="2.72" />
                          <circle cx="87.514" cy="2.846" r="2.719" />
                        </g>
                        <g transform="translate(0 73)">
                          <circle cx="3.261" cy="2.926" r="2.72" />
                          <circle cx="15.296" cy="2.926" r="2.719" />
                          <circle cx="27.333" cy="2.926" r="2.72" />
                          <circle cx="39.369" cy="2.926" r="2.72" />
                          <circle cx="51.405" cy="2.926" r="2.72" />
                          <circle cx="63.441" cy="2.926" r="2.72" />
                          <circle cx="75.479" cy="2.926" r="2.72" />
                          <circle cx="87.514" cy="2.926" r="2.719" />
                        </g>
                        <g transform="translate(0 85)">
                          <circle cx="3.261" cy="3.006" r="2.72" />
                          <circle cx="15.296" cy="3.006" r="2.719" />
                          <circle cx="27.333" cy="3.006" r="2.72" />
                          <circle cx="39.369" cy="3.006" r="2.72" />
                          <circle cx="51.405" cy="3.006" r="2.72" />
                          <circle cx="63.441" cy="3.006" r="2.72" />
                          <circle cx="75.479" cy="3.006" r="2.72" />
                          <circle cx="87.514" cy="3.006" r="2.719" />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
