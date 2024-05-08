import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [result, setResult] = React.useState("");
  const notify = () => toast.success("Form Submitted Successfully");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b4ebb577-7950-4d35-861d-5a4c51b5fb3e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      notify();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="bg-[#ecfdfd]">
      <div className="mx-auto max-w-7xl  px-4">
        <div className="mx-auto max-w-7xl py-12  md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="animation-div-contact-left"></div>
              <div className="px-1 md:px-12 md:w-[25rem] w-15rem">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                  Get in touch
                </p>
                <div className="max-w-md mx-auto">
                  <div className="max-w-md mx-auto">
                    <form onSubmit={onSubmit} className="gap-3">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Name
                      </label>
                      <input
                      placeholder="Enter your name"
                      title="Enter your name"
                        type="text"
                        name="name"
                        required
                        className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm text-gray-700  placeholder:text-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                      />
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                      placeholder="Enter your email"
                      title="Enter your email"
                        type="email"
                        name="email"
                        required
                        className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm text-gray-700  placeholder:text-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                      />
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                      placeholder="Enter your message"
                      title="Enter your message"
                        className="flex h-28 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="message"
                        required
                      ></textarea>

                      <button
                        className="w-full rounded-md bg-black px-3 mt-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        type="submit"
                      >
                        Submit Form
                      </button>
                      <ToastContainer />
                    </form>
                    <span>{result}</span>
                  </div>
                </div>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://i.ibb.co/tPCVzZX/r-architec.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
