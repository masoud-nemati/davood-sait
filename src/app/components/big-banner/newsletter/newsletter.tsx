import React, { useState } from "react";
import  Button  from "@/app/components/ui/button/button";


const NewsLetter = () => {
    const [value, setValue] = useState("");
  return (
    <form className="box-form-newsletter">
      <input
        className="input-newsletter"
        placeholder="Your email Address"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="primary" className="my-0 mr-0 h-full">
        Sign Up
      </Button>
    </form>
  );
};
export default NewsLetter
