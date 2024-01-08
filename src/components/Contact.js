import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us page</h1>
      <form>
        <input
          type="text"
          className="form-control p-2 m-2 border border-black"
          placeholder="Name"
        />
        <div>
          <textarea
            className="form-control p-2 m-2 border border-black"
            placeholder="Message"
          />
        </div>
        <button className="p-2 m-2 border border-black bg-black text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
