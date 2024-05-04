export const isLoggedIn = () => {
	if (window.localStorage) {
		if (localStorage.getItem("token")) {
			return true;
		} else {
			false;
		}
	}
};
