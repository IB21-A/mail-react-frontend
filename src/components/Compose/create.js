import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory(); // getting the history from the react-router-dom

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsPending(true);

		console.log(blog);
		fetch("endpoint", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("New blog added");
			setIsPending(false);
			history.push("/"); // pushes this link to top of stack, aka directs the user to that page
		});
	};

	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog Body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<label>Blog Author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="mario">Mario</option>
					<option value="yoshi">Yoshi</option>
				</select>
				{!isPending && <button> Add blog</button>}
				{isPending && <button disabled>Adding blog...</button>}
			</form>
		</div>
	);
};
