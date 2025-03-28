import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";

const General = () => {
  return (
    <div>
      <div className="grid gap-3 space-y-4 lg:grid-cols-2 w-2/3 mx-auto py-10">
        <div>
          <div className="text-center mb-8">
            <h1 className="text-yellow-500 mx-auto lg:text-2xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-40 lg:w-60 justify-center">
              <MdOutlineCastForEducation />
              Faq's
            </h1>
            <h1 className="text-2xl lg:text-4xl font-extrabold">
              General <span className="text-yellow-500">frequently </span> asked
              questions.
            </h1>
            <p className="text-gray-600 ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>

          <button className="px-4 py-2 mt-4 hover:bg-teal-700 bg-yellow-500 text-white rounded-tl-2xl rounded-br-2xl">
            HAVE ANY QUESTIONS{" "}
          </button>
        </div>

       <div className=" space-y-4">
       <div>
          <div
            tabIndex={0}
            className="collapse collapse-open bg-base-100 border-base-300 border"
          >
            <div className="collapse-title text-teal-600 font-semibold">
             How can do i apply ?
            </div>
            <div className="collapse-content text-sm">
            We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire ante odio dignissim quam vitae pulvinar turpis.
            </div>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title text-teal-600 font-semibold">
            How Can I Become A Menber ?
          </div>
          <div className="collapse-content text-sm">
          We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire ante odio dignissim quam vitae pulvinar turpis.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title text-teal-600 font-semibold">
           What Payment Gateway You Support ?
          </div>
          <div className="collapse-content text-sm">
          We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire ante odio dignissim quam vitae pulvinar turpis.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title text-teal-600 font-semibold">
            How Can I cancel My Request  ?
          </div>
          <div className="collapse-content text-sm">
          We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire ante odio dignissim quam vitae pulvinar turpis.
          </div>
        </div>
       </div>

       
      </div>
    </div>
  );
};

export default General;
