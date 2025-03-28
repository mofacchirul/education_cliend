
import React from 'react';
import { MdOutlineCastForEducation, MdVerified } from 'react-icons/md';

const AdmissionsBannar = () => {
    return (
        <div>
          <div className='grid space-y-4 lg:grid-cols-2 w-2/3 mx-auto py-10'>
            <div>
            <div className="text-center mb-8">
                    <h1 className="text-yellow-500 mx-auto lg:text-2xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-40 lg:w-60 justify-center">
                      <MdOutlineCastForEducation />Addmission Now
                    </h1>
                    <h1 className="text-2xl lg:text-4xl font-extrabold">
                    Details About <span className="text-yellow-500">Addmission Now</span> Eduka.
                    </h1>
                    <p className="text-gray-600 ">
                    There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable. If you are going to use passage you need sure there anything embarrassing first true generator on the Internet.
                    </p>
                    <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                   
                  </div>
                  <ul className='grid grid-cols-2'>
                        <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span>Start Online Submission</li>
                        <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span>Gather Necessary Documentsn</li>
                        <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span>Submit The Form</li>
                        <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span>Interviewing Process</li>
                        <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span>Review The Submission</li>
                        <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span>Last Decision</li>
                        
                       
                    </ul>
                    <button className='px-4 py-2 mt-4 hover:bg-teal-700 bg-yellow-500 text-white rounded-tl-2xl rounded-br-2xl'>Apply Now</button>
            </div>
            <div>
              <img src="https://i.ibb.co.com/Y785C8KL/01-2.jpg" className=' w-96 mx-auto rounded-tr-4xl rounded-b-4xl' alt="" />
            </div>
        </div>

        <div className='grid lg:grid-cols-2 w-2/3 mx-auto gap-4 py-10'>
           <div>
            <h1 className=' text-xl font-semibold lg:text-2xl'>Things To Know First</h1>
            <p className='py-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here making it look like readable English.</p>
           </div>
           <div>
           <h1 className=' text-xl lg:text-2xl font-semibold'>Documents And Financial Aid</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
           <ul>
           <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span> Sed ut perspiciatis unde omnis iste natus error sit doloremque laudantium. </li>
           <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span> Totam rem aperiam eaque ipsa quae ab illo inventore veritatis. </li>
           <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit. </li>
           <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span> Dolores eos qui ratione voluptatem sequi nesciunte porro quisquam est.</li>
           <li className='flex items-center gap-2 '> <span className='text-teal-700'><MdVerified /></span> Adipisci velit sed quia non numquam eius modi tempora incidunt. </li>
           </ul>
           </div>
        </div>
        </div>
    );
};

export default AdmissionsBannar;