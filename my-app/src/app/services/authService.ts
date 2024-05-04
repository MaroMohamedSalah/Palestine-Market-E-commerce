export const isLoggedIn = () => {
	if (typeof window !== "undefined" && window.localStorage) {
		if (localStorage.getItem("token")) {
			return true;
		} else {
			return false;
		}
	}
	return false;
};
