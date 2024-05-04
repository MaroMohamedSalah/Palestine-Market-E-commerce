export const isLoggedIn = () => {
	if (typeof window !== "undefined" && window.localStorage) {
		if (localStorage.getItem("token")) {
			return true;
		} else {
			return false; // You missed returning the value here
		}
	}
	return false; // Handle the case when window or localStorage is not available
};
