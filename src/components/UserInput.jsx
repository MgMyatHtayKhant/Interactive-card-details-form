import { Input, Label } from "./";
import classNames from "classnames";


/* eslint-disable react/prop-types */
const UserInput = ({ userClasses, label, htmlFor, inputs, register, errors, validation }) => {
    let allClasses = classNames(userClasses, "space-y-1");
    return (
        <div className={allClasses}>
            <Label htmlFor={htmlFor}>{label}</Label>
            <div className="grid grid-cols-2 gap-x-3">
                {
                    inputs.map(each => (
                        <Input
                            key={each.usage}
                            {...each}
                            register={register}
                            validation={validation}
                            isError={errors[each.usage] ? true : false}
                        />
                    ))
                }
            </div>
            <p className="text-sm h-5 text-error">
                {
                    inputs.length === 2 ? (
                        (errors[htmlFor] || errors.year)?.message
                    ) :
                        errors[htmlFor]?.message
                }
            </p>
        </div>
    );
};

export default UserInput;