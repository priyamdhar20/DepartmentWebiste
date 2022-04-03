import React from 'react';

const StudentSignUp = () => {
  return (
		<>
			<div className="container-fluid studentSign">
				<div className="pictureStudent">
					<img className="student-pic" src="Student.jpg" alt="Student" />
				</div>
				<div className="student-details container">
					<h1>Sign Up</h1>
					<br />
					<form class="row g-3">
						<div class="col-md-6">
							<label for="fname" class="form-label">
								First Name
							</label>
							<input type="text" class="form-control" id="fname" />
						</div>
						<div class="col-md-6">
							<label for="lname" class="form-label">
								Last Name
							</label>
							<input type="email" class="form-control" id="lname" />
						</div>
						<div class="col-md-6">
							<label for="inputEmail4" class="form-label">
								Email
							</label>
							<input
								type="email"
								class="form-control"
								id="inputEmail4"
							/>
						</div>
						<div class="col-md-6">
							<label for="inputPassword4" class="form-label">
								Password
							</label>
							<input
								type="password"
								class="form-control"
								id="inputPassword4"
							/>
						</div>
						<div class="col-6">
							<label for="UID" class="form-label">
								Unique ID
							</label>
							<input type="text" class="form-control" id="UID" />
						</div>
						<div class="col-6">
							<label for="inputRegistration" class="form-label">
								Registration Number
							</label>
							<input
								type="text"
								class="form-control"
								id="inputRegistration"
							/>
						</div>
						<div class="dropdown">
							<button
								class="btn btn-warning dropdown-toggle my-3 col-4"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Choose Semester
							</button>
							<ul
								class="dropdown-menu"
								aria-labelledby="dropdownMenuButton1"
							>
								<li>
									<p className="dropdown-item">Semester 1</p>
								</li>
								<li>
									<p className="dropdown-item">Semester 2</p>
								</li>
								<li>
									<p className="dropdown-item">Semester 3</p>
								</li>
								<li>
									<p className="dropdown-item">Semester 4</p>
								</li>
								<li>
									<p className="dropdown-item">Semester 5</p>
								</li>
								<li>
									<p className="dropdown-item">Semester 6</p>
								</li>
							</ul>
						</div>
						<div class="col-12">
							<button type="submit" class="btn btn-outline-success px-4">
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
  );
}

export default StudentSignUp;