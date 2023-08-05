import React from "react";
import "./Register.css";
import illustrationIntro from "../images/illustration-intro.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import logo from "../images/logo.png";

const Register = () => {
	return (
		<div>
			<header>
				{/* ... (rest of the header section) ... */}
				<nav id="nav">
					<div class="brand">
						<img src={logo} alt="manage landing page logo" />
					</div>
					<input id="toggle" type="checkbox" />
					<label for="toggle" class="hamburger">
						<span class="hamburger__icon"></span>
					</label>
					<ul>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Product</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Careers</a>
						</li>
						<li>
							<a href="#">Community</a>
						</li>
					</ul>
					<button class="cta cta--nav">Get Started</button>
					<div class="overlay"></div>
				</nav>
			</header>

			<section classNameNameName="hero">
				<div className="container">
					<div className="hero__wrapper">
						<figure className="hero__image">
							<img src={illustrationIntro} alt="graph-chart-data" />
						</figure>
						<div className="hero__text">
							<h1 className="title">
								Bring everyone together to build better products.
							</h1>
							<p className="subtitle">
								Manage makes it simple for software teams to plan day-to-day
								tasks while keeping the larger team goals in view.
							</p>
							<button className="cta cta--header">Get Started</button>
						</div>
					</div>
				</div>
			</section>
			<section classNameName="features">
				{/* ... (rest of the features section) ... */}
				<div className="container">
					<div className="features__wrapper">
						<div className="features__text">
							<h1>What's different about Manage?</h1>
							<p>
								Manage provides all the functionality your team needs, without
								the complexity. Our software is tailor-made for modern digital
								product teams.
							</p>
						</div>
						<div className="features__list">
							<div className="features__item">
								<div className="heading">
									<h3 className="feature-number">01</h3>
									<h3 className="benefit">Track company-wide progress</h3>
								</div>
								<p className="details">
									See how your day-to-day tasks fit into the wider vision. Go
									from tracking progress at the milestone level all the way done
									to the smallest of details. Never lose sight of the bigger
									picture again.
								</p>
							</div>
							<div className="features__item">
								<div className="heading">
									<h3 className="feature-number">02</h3>
									<h3 className="benefit">Advanced built-in reports</h3>
								</div>
								<p className="details">
									Set internal delivery estimates and track progress toward
									company goals. Our customisable dashboard helps you build out
									the reports you need to keep key stakeholders informed.
								</p>
							</div>
							<div className="features__item">
								<div className="heading">
									<h3 className="feature-number">03</h3>
									<h3 className="benefit">Everything you need in one place</h3>
								</div>
								<p className="details">
									Stop jumping from one service to another to communicate, store
									files, track tasks and share documents. Manage offers an
									all-in-one team productivity solution.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer>
				{/* ... (rest of the footer section) ... */}
				<div className="container">
					<div className="wrapper">
						<form>
							<input
								type="email"
								id="email"
								placeholder="Updates in your inbox.."
							/>
							<small>Error message</small>
							<button type="submit" className="cta cta--email">
								Go
							</button>
						</form>
						<div className="footer-menu">
							<ul className="footer-menu__left">
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">Pricing</a>
								</li>
								<li>
									<a href="#">Products</a>
								</li>
								<li>
									<a href="#">About Us</a>
								</li>
							</ul>
							<ul className="footer-menu__right">
								<li>
									<a href="#">Careers</a>
								</li>
								<li>
									<a href="#">Community</a>
								</li>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
							</ul>
						</div>
						<div className="social">
							<ul className="icons">
								<li>
									<a href="#">
										<img src={facebook} alt="facebook icon" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={youtube} alt="youtube icon" className="size" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src={twitter} alt="twitter icon" className="size" />
									</a>
								</li>
							</ul>
							<img src={logo} alt="manage landing page logo" className="logo" />
						</div>
						<p className="copyright">Copyright 2023. All Rights Reserved</p>
					</div>
					<div className="attribution">
						Challenge by
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank">
							Frontend Mentor
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Register;
