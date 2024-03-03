import { UserInput } from "../components";
import { useForm } from "react-hook-form";
import { logo, complete } from "../assets/images";
import userInput from "../data";
import { useState } from "react";


const Hero = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => setIsSubmitted(prev => !prev);


    return (
        <section className="min-h-screen grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
            {/* Left */}
            <div className="relative bg-mobile lg:bg-desktop">
                {/* Card Front */}
                <div className="card z-20 max-lg:-bottom-8 lg:left-[25%] ">
                    <div className="bg-card-front card-bg flex-col gap-2 p-4 lg:gap-4">
                        <div className="flex-1">
                            <img className="w-16 lg:w-max" src={logo} alt="Logo" />
                        </div>
                        <p className="font-bold text-[18px] tracking-widest">
                            9591 6489 6389 101E
                        </p>
                        <div className="flex justify-between text-sm text-slate-300 font-semibold">
                            <span>FELICIA LEIRE</span> <span>09/00</span>
                        </div>
                    </div>
                </div>
                {/* Card Back */}
                <div className="flex justify-end card z-10 max-lg:bottom-12 lg:left-[40%] lg:mt-4">
                    <div className="bg-card-back card-bg justify-end items-center p-6 lg:p-8">
                        <p className="text-sm font-semibold tracking-widest pb-1 lg:text-xl">000</p>
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className="right">
                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-1 max-w-[378px] mx-auto pt-16 px-4 lg:pt-0">
                    {
                        isSubmitted ? (
                            <div className="flex flex-col items-center gap-6 mb-8">
                                <img src={complete} alt="" />
                                <h1 className="font-bold uppercase text-3xl tracking-widest">Thank You!</h1>
                                <p className="text-dark-grayish-violet">We&apos;ve added your card details</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                                {
                                    userInput.map((each, index) => (
                                        <UserInput
                                            key={index}
                                            {...each}
                                            register={register}
                                            errors={errors}
                                        />
                                    ))
                                }
                            </div>
                        )
                    }
                    <div>
                        <button type="submit" className="btn">
                            {isSubmitted ? "Continue" : "Confirm"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Hero;
