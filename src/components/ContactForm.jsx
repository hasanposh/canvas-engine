import { IoMdCall } from "react-icons/io";

const ContactForm = () => {
  return (
    <div className="container mx-auto border-2 rounded-xl p-10 my-10">
        <h2 className="text-5xl py-5 text-center">
          You Can Also  Contact With US 
          
        </h2>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-col gap-3 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="input border-blue-400 input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Email address"
            className="input border-blue-400 input-bordered w-full "
          />
          <textarea
            className="textarea border-blue-400"
            placeholder="Your text"
          ></textarea>
          <button className="btn text-white bg-blue-400">Submit</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
          <div className="flex items-center  gap-3">
            <IoMdCall />
            <div>
              <h2 className="text-xl font-semibold">Technical support</h2>
              <p>supprt@example.com</p>
              <p>+1 (555) 555-5555</p>
            </div>
          </div>
          <div className="flex items-center  gap-3">
            <IoMdCall />
            <div>
              <h2 className="text-xl font-semibold">Sales Question</h2>
              <p>sales@example.com</p>
              <p>+1 (555) 555-5555</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <IoMdCall />
            <div>
              <h2 className="text-xl font-semibold">Press</h2>
              <p>press@example.com</p>
              <p>+1 (555) 555-5555</p>
            </div>
          </div>
          <div className="flex items-center  gap-3">
            <IoMdCall />
            <div>
              <h2 className="text-xl font-semibold">Technical support</h2>
              <p>supprt@example.com</p>
              <p>+1 (555) 555-5555</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
