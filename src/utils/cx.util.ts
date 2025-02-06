const cx = (...classes: any[]) => {
	return classes.filter((className) => className && typeof className === "string").join(" ");
};

export default cx;
