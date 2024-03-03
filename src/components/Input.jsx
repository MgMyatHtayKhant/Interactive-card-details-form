import classNames from "classnames";

/* eslint-disable react/prop-types */
const Input = ({ userClasses, type, usage, placeholder, register, validation, isError }) => {
    let defaultClasses = `p-[2px] rounded ${isError ? "bg-red-500" :
        "bg-gradient-to-r from-border-left to-border-right"}`;
    let allClasses = classNames(userClasses, defaultClasses);

    return (
        <div className={allClasses}>
            <input
                className="w-full py-[3px] px-2 text-[18px] font-semibold focus:outline-none"
                type={type}
                id={usage}
                placeholder={placeholder}
                {...register(usage, {
                    required: {
                        value: true,
                        message: "Can't be blank"
                    },
                    ...validation
                })}
            />
        </div>
    );
};

export default Input;