import { useLayoutEffect } from "react";

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "Ayush - Glasses Store";
    }
  }, [title]);
};

export default useDocumentTitle;
