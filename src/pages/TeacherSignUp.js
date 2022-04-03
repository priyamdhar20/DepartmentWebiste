import React from 'react';

const TeacherSignUp = () => {
  return (
		<>
			<div className="container-fluid teacherSign">
				<div className="pictureTeacher">
					<img className="teacher-pic" src="Teacher.jpg" alt="Teacher" />
				</div>

				<div className="teacher-details container">
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
							<input
								type="email"
								class="form-control"
								id="lname"
							/>
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
						<div class="col-12">
							<label for="inputAddress" class="form-label">
								Address
							</label>
							<input
								type="text"
								class="form-control"
								id="inputAddress"
								placeholder="1234 Main St"
							/>
						</div>
						<div class="col-12">
							<label for="inputAddress2" class="form-label">
								Address 2
							</label>
							<input
								type="text"
								class="form-control"
								id="inputAddress2"
								placeholder="Apartment, studio, or floor"
							/>
						</div>
						<div class="col-md-6">
							<label for="inputCity" class="form-label">
								City
							</label>
							<input type="text" class="form-control" id="inputCity" />
						</div>
						<div class="col-md-4">
							<label for="inputState" class="form-label">
								State
							</label>
							<input type="text" class="form-control" id="inputState" />
						</div>
						<div class="col-md-2">
							<label for="inputZip" class="form-label">
								Zip
							</label>
							<input type="text" class="form-control" id="inputZip" />
						</div>
						<div class="mb-3">
							<label for="formFile" class="form-label">Upload Profile Picture</label>
							<input class="form-control" type="file" id="formFile" />
						</div>
						<div class="col-12">
							<button type="submit" class="btn btn-outline-primary">
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
  );
}

export default TeacherSignUp;