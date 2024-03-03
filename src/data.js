const userInput = [
    {
        userClasses: "col-span-full",
        label: "CARDHOLDER NAME",
        htmlFor: "name",
        inputs: [{
            userClasses: "col-span-full",
            type: "text",
            usage: "name",
            placeholder: "e.g. Jane Applesed",
        }],
        validation: {}
    },
    {
        userClasses: "col-span-full",
        label: "CARD NUMBER",
        htmlFor: "password",
        inputs: [{
            userClasses: "col-span-full",
            type: "password",
            usage: "password",
            placeholder: "e.g. 1234 5678 9123 0000",
        }],
        validation: {
            minLength: {
                value: 5,
                message: "Less than 5!"
            },
            maxLength: {
                value: 10,
                message: "More than 10!"
            },
            pattern: {
                value: /^[0-9]+$/,
                message: "Wrong format, number only"
            }
        }
    },
    {
        userClasses: "",
        label: "Exp. Date (MM/YY)",
        htmlFor: "month",
        inputs: [{
            userClasses: "",
            type: "text",
            usage: "month",
            placeholder: "MM",
        }, {
            userClasses: "",
            type: "text",
            usage: "year",
            placeholder: "YY",
        }],
        validation: {
            minLength: {
                value: 2,
                message: "Less than 2!"
            },
            maxLength: {
                value: 2,
                message: "More than 2!"
            },
            pattern: {
                value: /^[0-9]+$/,
                message: "Wrong format, number only"
            }
        }
    },
    {
        userClasses: "",
        label: "CVC",
        htmlFor: "cvc",
        inputs: [{
            userClasses: "col-span-full",
            type: "text",
            usage: "cvc",
            placeholder: "e.g. 123",
        }],
        validation: {
            minLength: {
                value: 3,
                message: "Less than 3!"
            },
            maxLength: {
                value: 3,
                message: "More than 3!"
            },
            pattern: {
                value: /^[0-9]+$/,
                message: "Wrong format, number only"
            }
        }
    }
];

export default userInput;