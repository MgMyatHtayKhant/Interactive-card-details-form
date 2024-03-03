import classNames from "classnames";

/* eslint-disable react/prop-types */
const Label = ({ children, userClasses, htmlFor }) => {
    let allClasses = classNames(userClasses, "tracking-wider max-sm:text-sm");
    return (
        <label className={allClasses} htmlFor={htmlFor}>{children}</label>
    );
};

export default Label;