import React from 'react';

const Home = () => {
  return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Computer Science
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#"
								>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contacts
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* login card */}
			<div className="container-fluid cards py-5">
				<div className="login-card card-body">
					<div className="card-body my-5">
						<h1 className="card-title my-5 mx-4">Login</h1>
						<h1 className="card-title my-5 mx-4">Sign Up</h1>
					</div>
				</div>

				{/* Previous Year Question Papers */}
				<div className="login-card card-body">
					<div className="card-body my-5">
						<h1 className="card-title my-2 mx-4">
							Check Your Progress Report
						</h1>
					</div>
				</div>

				{/* Progress Check */}
				<div className="question-card card-body">
					<div className="card-body my-5">
						<h1 className="card-title my-5 mx-4">
							Previous Year Questions
						</h1>
					</div>
				</div>
			</div>

			
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item">
						<div className="question-card card-body d-block w-100">
							<div className="card-body my-5">
								<h1 className="card-title my-5 mx-4">
									Previous Year Questions
								</h1>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="question-card card-body d-block w-100">
							<div className="card-body my-5">
								<h1 className="card-title my-5 mx-4">
									Last Year Questions
								</h1>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="question-card card-body d-block w-100">
							<div className="card-body my-5">
								<h1 className="card-title my-5 mx-4">
									This Year Questions
								</h1>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
  );
}

export default Home;