import React from 'react'


export const Register=()=>{
return(
<>
<div>
        <div className="register-photo">
          <div className="form-container">
            <div className="image-holder"></div>
            <form method="post" >
              <h2 className="text-center">
                <strong>Create</strong> an account.
              </h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="fullname"
                  placeholder="Fullname"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  name="number"
                  placeholder="Number"
                  required
                />
              </div>

              <div className="form-group">
                <select className="form-control">
                  <option>Blood Group</option>
                  <option>A(+)</option>
                  <option>B(+)</option>
                  <option>0(+)</option>
                  <option>AB(+)</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  name="age"
                  placeholder="Age"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password-repeat"
                  placeholder="Password (repeat)"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="file"
                  name="file"
                  required
                />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <label for className="form-check-label">
                    <input className="form-check-input" type="checkbox" />I agree to
                    the license terms.
                  </label>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Sign Up
                </button>
              </div>
              <a href="http://localhost:3001/login" className="already">
                You already have an account? Login here.
              </a>
            </form>
          </div>
        </div>
      </div>






</>




)
}