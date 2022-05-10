import React, { useEffect } from "react";

const ThomCodesModal = () => {
  useEffect(() => {
    if (document.referrer === "https://www.thomcodes.com/") {
      console.log("Hey Looks like you came from my site!");
      //   Pop up modal, let them click a button to log in without having to type anything in
    }
  });

  return <div>ThomCodesModal</div>;
};

export default ThomCodesModal;
