import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <form className="p-6 shadow-lg rounded-lg bg-white" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center text-2xl font-semibold mb-6">Send us a Message</h3>

            {/* Full Name */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="fullName" className="font-semibold">Full Name*</label>
              <p className="text-gray-400">Anzoor</p>
              <hr />
              {/* <input
                type="text"
                placeholder="Anzoor"
                className="ps-3 border text-black rounded-md"
                {...register("fullName")}
              /> */}
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="email" className="font-semibold">Email*</label>
              <p className="text-gray-400">anzoor@gmail.com</p>
              <hr />
              {/* <input
                type="text"
                placeholder="Anzoor@gmail.com"
                className="ps-3 border text-black rounded-md"
                {...register("email")}
              /> */}
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="phone" className="font-semibold">Phone*</label>
              <p className="text-gray-400">+93(771668119)</p>
              <hr />
              {/* <input
                type="number"
                placeholder="+93(771668119)"
                className="ps-3 border text-black rounded-md"
                {...register("phone")}
              /> */}
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="message" className="font-semibold">Message*</label>
              <p className="text-gray-400">Type your message here...</p>
              <hr />
              {/* <textarea
                placeholder="Type your message here..."
                className="ps-3 border text-black rounded-md h-24 resize-none"
                {...register("message")}
              /> */}
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </>
  );
}
