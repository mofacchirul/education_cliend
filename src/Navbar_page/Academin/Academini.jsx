import Typewriter from 'typewriter-effect';
import React from 'react';
import { FaAnglesRight, FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const Academini = () => {

    const courses=[
        {
            id:1,
            name:'Computer Science And Engineering',
            
        },
        {   id:2,
            name:'Software Engineering',
        },
        { 
            id:3,
            name:'Data Science',
            
        },
        {
            id:4,
            name:'Artificial Intelligence',
        },
        { 
            id:5,
            name:'Cloud Computing',
            
        },
        {
            id:6,
            name:'Cybersecurity',
        }
    ]

  
    const faculty = [
      { name: "Ms. Angela T. Vigil", subject: "Computer Science And Engineering", email: "Angela@example.com",img:'https://i.ibb.co.com/4Z6x0Sdn/01-1.jpg' },
      { name: "Ms. Angela T. Vigil", subject: "Computer Science And Engineering", email: "Angela@example.com",img:'https://i.ibb.co.com/qFDTz7v8/02.jpg' },
      { name: "Ms. Jane Smith", subject: "Software Engineering", email: "Jane@example.com",img:'https://i.ibb.co.com/vtk8MDc/04.jpg' },
      { name: "Ms. Frank A. Mitchell", subject: "Data Science", email: "Frank@example.com" ,img:'https://i.ibb.co.com/nMV3FwvR/A-List-of-the-Top-Websites-for-Cheap-College-Textbooks.jpg'},
      { name: "Mr. Susan D. Lunsford", subject: "Artificial Intelligence", email: "Susan@example.com",img:'https://i.ibb.co.com/przQ7LjT/03.jpg' },
      { name: "Ms. Dennis A. Pruitt", subject: "Cloud Computing", email: "Dennis@example.com" ,img:'https://i.ibb.co.com/rRWKbhcL/eb8d9dd3-317d-49df-8542-4b024c6adbe8.jpg'},
      { name: "Ms. Mark Lee", subject: "Cybersecurity", email: "mark@example.com",img:'https://i.ibb.co.com/Y7qkLSyN/70-Tips-Tricks-for-Educating-Students-with-Aspergers-High-Functioning-Autism.jpg' },
    ];
    const notices = [
      "📢 Final Exam starts from March 15!",
      "📢 Library will remain closed on Sunday.",
      "📢 New scholarships available! Apply now."
    ];

    const education = [
        {
            id: 1,
            title: 'How To Prepare For The Exam',
            description: 'Power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection.',
            details: 'Aliquam facilisis rhoncus nunc, non vestibulum mauris volutpat non. Vivamus tincidunt accumsan urna, vel aliquet nunc commodo tristique. Nulla facilisi. Phasellus vel ex nulla. Nunc tristique sapien id mauris efficitur, porta scelerisque nisl dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at mollis tellus. Proin consequat, orci nec bibendum viverra, ante orci suscipit dolor, et condimentum felis dolor ac lectus.',
            title2: 'Admission In Business And Finance',
            description2: 'Quisque a nisl id sem sollicitudin volutpat. Cras et commodo quam, vel congue ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras quis venenatis neque. Donec volutpat tellus lobortis mi ornare eleifend. Fusce eu nisl ut diam ultricies accumsan. Integer lobortis vestibulum nunc id porta. Curabitur aliquam arcu sed ex dictum, a facilisis urna porttitor. Fusce et mattis nisl. Sed iaculis libero consequat justo auctor iaculis. Vestibulum sed ex et magna tristique bibendum. Sed hendrerit neque nec est suscipit, id faucibus dolor convallis.'
        }
    ];
   
    return (
        <div>
            
             <div
                className="hero min-h-[350px] relative"
                style={{
                    backgroundImage: "url(https://i.ibb.co/yc3wmkV1/slider-3.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                {/* Linear Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black "></div>

                {/* Content */}
                <div className="hero-content text-white text-center relative z-10">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold"></h1>
                        <h1 className="lg:text-3xl text-2xl font-bold flex gap-2"> <span className='uppercase text-transparent  text-bg-clip  bg-clip-text bg-gradient-to-r from-yellow-500  to-pink-600'>
                        <Typewriter

                            options={{
                                strings: ['Academic Department Single'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>



                    </h1>
                        <h1 className='flex items-center gap-3 text-xl  '><Link  to={'/'}> Home</Link> <FaAnglesRight /> <span className='text-'>Academic Department Single</span> </h1>
                    </div>
                </div>
            </div>

          <div className='pt-10 w-1/2 mx-auto'>
          <h1 className="lg:text-3xl text-2xl font-bold flex gap-2"> <span className='uppercase text-transparent  text-bg-clip  bg-clip-text bg-gradient-to-r from-yellow-500  to-pink-600'>
                        <Typewriter

                            options={{
                                strings: ['Academic Information'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>



                    </h1>
          </div>
           
            <div className='max-w-6xl mx-auto grid grid-cols-1 gap-3 lg:grid-cols-12 '>
                <div className='col-span-5 '>
                    {/* <div className=' shadow-2xl border lg:mt-8 border-solid border-yellow-500  rounded-3xl  bg-white p-3'>
                        <h1 className='border-b  text-xl font-semibold text-center pb-2 w-1/2 mx-auto border-yellow-500'>Our Departments</h1>
                        {
                            courses?.map(course=> <h1 className='flex items-center gap-2 text-xl' key={course.id}>
                            <span className='text-yellow-500'><FaArrowRight /></span>     {course.name}
                            </h1>)
                        }
                    </div> */}
                     <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-teal-500 pt-7">📚 Departments</h3>
        <ul className="list-disc pl-5 text-gray-100">
          {courses.map((course) => (
            <li key={course.id}  className='list-none flex items-center gap-2 text-2xl'> <span className='text-yellow-500'> <FaArrowRight /></span> {course.name}</li>
          ))}
        </ul>
      </div>

                    <div>
                       <div className=' space-y-2 py-5  '>
                       <img src="https://i.ibb.co.com/5hvJwwFB/01-1.jpg"  className='rounded-3xl' alt="" />
                       <img src="https://i.ibb.co.com/twHJvCPg/02-1.jpg" className='rounded-3xl'  alt="" />
                       </div>
                       <div>
                       {education.map((educati) => (
                <div key={educati.id}>
                        <p>{educati.description}</p>
                        <h1 className="lg:text-3xl text-2xl font-bold flex gap-2"> <span className='uppercase   text-transparent  text-bg-clip  bg-clip-text bg-gradient-to-r from-orange-500  to-teal-500'>
                        <Typewriter

                            options={{
                                strings: [`${educati.title}`],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>



                    </h1>

                
                    <p>{educati.details}</p>
                    <h1 className="lg:text-3xl text-2xl font-bold flex gap-2"> <span className='uppercase   text-transparent  text-bg-clip  bg-clip-text bg-gradient-to-r from-yellow-500  to-pink-600'>
                        <Typewriter

                            options={{
                                strings: [`${educati.title2}`],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>



                    </h1>
                   
                    <p>{educati.description2}</p>
                </div>
            ))}
                       </div>
                    </div>
                </div>
                <div className='col-span-7 '>
                <div className="max-w-4xl mx-auto p-6">
                <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">📌 Notices & Announcements</h3>
        <ul className="list-disc pl-5 text-gray-100">
          {notices.map((notice, index) => (
            <li key={index} className="mb-2">{notice}</li>
          ))}
        </ul>
      </div>
   
      
      
      
      

      {/* Faculty Members */}
      <div className="pt-10">
        <h3 className="text-2xl font-semibold mb-3 text-teal-500 pt-16 ">👨‍🏫 Faculty Members</h3>
        <ul className="space-y-3 grid items-center w-96 mx-auto lg:w-full lg:grid-cols-2 gap-2.5">
          {faculty.map((teacher, index) => (
            <div className=' border rounded-lg p-2 shadow'>
                <li key={index} className="p-4 text-center ">
              <p className="font-bold"> teacher Name :  {teacher.name}</p>
              <p> teacher Subject : {teacher.subject}</p>
              <p className="text-yellow-500">Teacher Email : {teacher.email}</p>
            </li>
            <img src={teacher.img} className='h-96 lg:w-full mx-auto rounded-3xl'  alt="" />
            </div>
          ))}
        </ul>
      </div>

      {/* Notices */}
     
    </div>
                </div>
            </div>
        </div>
    );
};

export default Academini;