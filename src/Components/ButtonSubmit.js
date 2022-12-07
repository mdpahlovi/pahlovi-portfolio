import React from "react";

const ButtonSubmit = ({ children }) => {
    return (
        <button type="submit" className="btn btn-primary w-full">
            {children}
        </button>
    );
};

export default ButtonSubmit;
