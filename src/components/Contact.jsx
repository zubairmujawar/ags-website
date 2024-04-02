import React from "react";
const Contact = () => {
  const [result, setResult] = React.useState("");

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
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="bg-[#ecfdfd]">
      <div class="mx-auto max-w-7xl  px-4">
        <div class="mx-auto max-w-7xl py-12  md:py-24">
          <div class="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div class="flex items-center justify-center">
              <div className="animation-div-contact-left"></div>
              <div class="px-1 md:px-12 md:w-[25rem] w-15rem">
                <p class="text-2xl font-bold text-gray-900 md:text-4xl">
                  Get in touch
                </p>
                <div className="max-w-md mx-auto">
                  <form action="" class="space-y-8">
                    <div class="grid w-full  items-center gap-1.5">
                    
                    
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="email"
                      >
                        Name
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm text-gray-700  placeholder:text-gray-800  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                        type="text"
                        id="Name"
                        placeholder="Name"
                      />
                    </div>
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm text-gray-700  placeholder:text-gray-800  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                        type="text"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    
                    <div class="grid w-full  items-center gap-1.5">
                      <label
                        class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                        class="flex h-28 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                        id="message"
                        placeholder="Leave us a message"
                        cols="6"
                        rows="6"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      onSubmit={onSubmit}
                      class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Send Message
                    </button>
                    {result && <span className="text-green-500">{result}</span>}
                  </form>
                </div>
                {/* <div className="animation-div-home-about"></div> */}
              </div>
            </div>
            <img
              alt="Contact us"
              class="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
