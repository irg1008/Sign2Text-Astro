const endpoint = import.meta.env.PUBLIC_SIGN_URI;

interface Sign {
	target: string;
	error: Error;
}

export const getSignForVideo = async (video: File): Promise<Sign> => {
	// Add file to multiform then send a get request to the sign endpoint.

	const formData = new FormData();
	formData.append("video", video);

	try {
		const res = await fetch(`${endpoint}/sign`, {
			method: "POST",
			body: formData,
		});

		const data = await res.json();
		return { ...data, error: "" };
	} catch (err) {
		return { target: "", error: err as Error };
	}
};
