import { useEffect } from "react";

const useTitle = title => {
	useEffect(() => {
		document.title = `${title} || Daily News`;
	}, [title]);
};
export default useTitle;
