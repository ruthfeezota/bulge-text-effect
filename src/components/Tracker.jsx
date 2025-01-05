import { useEffect, useState } from "react";
import { db } from "../firebase.js";

function Tracker() {


	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [bname, setBname] = useState("");
	const [message, setMessage] = useState("");
	const [number, setNumber] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection("contact")
			.add({
				email: email,
				name: name,
				bname: bname,
				message: message,
				number: number,
			})

			.then(() => {
				alert("Form has be submitted 👍");
			})
			.catch((error) => {
				alert(error.message);
			});

		setEmail("");
		setName("");
		setBname("");
		setMessage("");
		setNumber("");
	};

	return (
		<div
			className="py-24 md:py-24 lg:py-28 mx-auto w-full max-w-7xl px-5 md:px-10 bg-[#E0DFDD]">
			<div
				className="grid max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
				<div className="flex flex-col items-start max-[991px]:max-w-[720px]">
				
					<div className="flex flex-row items-start">
						<div className="flex flex-col items-start mt-2">
							<h6 className="text-base text-black">
								Melvin Warren
							</h6>
							<p className="text-sm text-[#636262]">Hope Active</p>
						</div>
					</div>
				</div>
				<div
					className="mx-auto max-w-[608px] bg-[#E0DFDD] px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[1px]"
					data-aos="fade-up-right"
				>
					<div className="text-center">
						<h3 className="font-bold text-1xl md:text-3xl text-black">
							New Project Request
						</h3>
						<div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
							<div className="text-md text-black">
								Interested in creating a new custom coded
								website or application with React or Angular?
								Reach out to me today and let's bring your ideas
								to life!
							</div>
						</div>
						<div className="mx-auto w-full max-w-[400px]">
							<div className="mx-auto max-w-[400px] text-left mb-4">
								<form
									onSubmit={handleSubmit}
									className="space-y-5"
									name="wf-form-password"
									method="get"
								>
									<div className="relative">
										<label
											className="mb-1 font-medium text-black"
										>
											Full Name
										</label>
										<input
											type="text"
											onChange={(e) =>
												setName(e.target.value)
											}
											required
											value={name}
											className="m-0 mb-4 block w-full bg-[#E0DFDD] border-[1px] text-black border-[#E4A4BD] align-middle border-red-300 text-sm px-3 h-9 py-6 pl-4 uppercase"
											maxlength="256"
											name="name-2"
											placeholder="your name"
										/>
									</div>

									<div className="relative mb-2 text-black">
										<label
											for="name-2"
											className="mb-1 font-medium"
										>
											Business Name
										</label>
										<input
											type="bname"
											onChange={(e) =>
												setBname(e.target.value)
											}
											required
											value={bname}
											className="m-0 mb-4 block w-full bg-[#E0DFDD] border-[1px] text-black align-middle border-[#E4A4BD] text-sm px-3 h-9 py-6 pl-4 uppercase"
											maxlength="256"
											name="name-2"
											placeholder="business name"
										/>
									</div>

									<div className="relative mb-2 text-black">
										<label
											for="name-2"
											className="mb-1 font-medium"
										>
											Business Email
										</label>
										<input
											type="email"
											onChange={(e) =>
												setEmail(e.target.value)
											}
											required
											value={email}
											className="m-0 mb-4 block w-full bg-[#E0DFDD] border-[1px] text-black  align-middle border-[#E4A4BD] text-sm px-3 h-9 py-6 pl-4 uppercase"
											maxlength="256"
											name="name-2"
											placeholder="email@business.com"
										/>
									</div>

									<div className="relative mb-2 text-black">
										<label
											for="name-2"
											className="mb-1 font-medium"
										>
											Phone Number
										</label>

										<input
											type="number"
											onChange={(e) =>
												setNumber(e.target.value)
											}
											required
											value={number}
											placeholder="+1 (555) 000-000"
											className="m-0 mb-4 block w-full bg-[#E0DFDD] border-[1px] text-black align-middle border-[#E4A4BD] text-sm px-3 h-9 py-6 pl-4 uppercase"
											maxlength="256"
											name="name-2"
										/>
									</div>

									<div className="relative mb-5 md:mb-6 lg:mb-8">
										<label
											for="field-3"
											className="mb-1 font-medium text-black"
										>
											Project Brief
										</label>
										<textarea
											type="text"
											onChange={(e) =>
												setMessage(e.target.value)
											}
											required
											value={message}
											placeholder="project details"
											maxlength="5000"
											name="field"
											className="m-0 block h-auto min-h-[128px] w-full overflow-auto bg-[#E0DFDD] border-[1px] text-black align-middle border-[#E4A4BD] text-sm mb-2.5 px-3 py-2 pl-4 uppercase"
										>
											{" "}
										</textarea>
									</div>
									<input
										type="submit"
										value="Send Request"
										className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium bg-[#E4A4BD] text-black  hover:bg-black hover:border-[1px] hover:text-white duration-150 md:inline-flex  active:bg-black active:text-white  outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tracker;
