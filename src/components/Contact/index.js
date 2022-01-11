import { useEffect, useRef, useState } from "react";
import { Wrapper, Content, Display } from "./Contact.styles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

function Contact() {
	const [nameState, setNameState] = useState("");
	const [emailState, setEmailState] = useState("");
	const [message, setMessageState] = useState("");

	const form = useRef();

	useEffect(() => {
		setNameState(nameState);
	}, [setNameState, nameState]);

	useEffect(() => {
		setEmailState(emailState);
	}, [setEmailState, emailState]);

	useEffect(() => {
		setMessageState(message);
	}, [setMessageState, message]);

	function checkform(form) {
		// get all the inputs within the submitted form
		var inputs = form.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i++) {
			// only validate the inputs that have the required attribute
			if (inputs[i].hasAttribute("required")) {
				if (inputs[i].value == "") {
					// found an empty field that is required
					alert("Please fill all required fields");
					return false;
				}
			}
		}
		return true;
	}

	const sendEmail = (e) => {
		e.preventDefault();

		if (checkform(form.current)) {
			swal("Invalid Fields!", "Please fill out all fields", "error");
		}
		try {
			emailjs
				.sendForm(
					"service_m8v9ifc",
					"template_cwmourn",
					form.current,
					"user_X2NCaKytDuqKZIrohL0bN"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
			swal("Message Sent!", "Thank you for reaching out!", "success");
		} catch (err) {
            swal("Error!", "There was an error sending your message! Please try again in a few minutes", "error");
        }
	};

	return (
		<Wrapper>
			<Display>
				<EmailOutlinedIcon className="icon"></EmailOutlinedIcon>
				<h1>Feel free to contact me!</h1>
				<h3>Tysongagnon2@gmail.com</h3>
			</Display>
			<Content>
				<form ref={form} onSubmit={sendEmail}>
					<input
						onChange={(event) => setNameState(event.target.value)}
						value={nameState}
						type="text"
						placeholder="Name"
						name="user_name"
						required={true}
					/>

					<input
						onChange={(event) => setEmailState(event.target.value)}
						value={emailState}
						type="email"
						placeholder="E-mail"
						name="user_email"
						required={true}
					/>

					<textarea
						id="messageBox"
						onChange={(event) => setMessageState(event.target.value)}
						value={message}
						type="text"
						placeholder="Message"
						name="message"
						required={true}
					/>
					<input type="submit" class="button" value="Send!" />
				</form>
			</Content>
		</Wrapper>
	);
}

export default Contact;
