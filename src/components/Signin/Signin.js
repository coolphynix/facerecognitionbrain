import React from 'react';



const Signin = ({onRouteChange}) => {
return (
	    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
           <main className="pa4 black-80">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			     <legend className="f1 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db black fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db black fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph4 pv2 input-reset ba b--black bg-transparent hover-bg-light-red hover-white pointer" 
			      type="submit" 
			      value="Sign In"
			      onClick ={() => onRouteChange('home')}
			      />
			    </div>
			    <div className="lh-copy fw6 mt3">
			      <p onClick ={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
			    </div>
			  </form>
			</main>
		</article>
	);
}

export default Signin;