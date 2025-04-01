import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLaOut from './MainLayout/MainLaOut';
import Home from './Pages/Home/Home';

import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Courses_detels from './Pages/Courses/Courses_detels/Courses_detels';
import Joinevent from './Pages/Events/Joinevent/Joinevent';
import Blog_detels from './Pages/Blog/Blog_detels/Blog_detels';
import Navbar_Courses from './Navbar_page/Navbar_Courses/Courses';
import Academini from './Navbar_page/Academin/Academini';
import Abouts from './Navbar_page/Abouts/Abouts';
import Admissions from './Navbar_page/Admissions/Admissions';
import StudentApplicationForm from './Navbar_page/ApplyFrom/ApplyFrom';
import Blog_page from './Navbar_page/Blog_page/Blog_page';
import Contack_page from './Navbar_page/Conatack_page/Contack_page';
import My_applicatons from './Navbar_page/My_applicatons/My_applicatons';
import Login from './Auth/Login/Login';
import SignupForm from './Auth/Singup/Singup';
import Provider from './Auth/Provider/Provider'
import Dashbord from './DashBord/DashBord';
import All_users from './DashBord/DashBord_Page/All_users/All_users';
import Admin_home from './DashBord/DashBord_Page/Admin_home/Admin_home';
import CoursePost from './DashBord/DashBord_Page/CousePost/CousePost';
import Admin_blog from './DashBord/DashBord_Page/Admin_blog/Admin_blog';
import Manage_Applications from './DashBord/DashBord_Page/Manage_Applications/Manage_Applications';
import Announcements from './DashBord/DashBord_Page/Announcements/Announcements';
import AdminAnnouncementForm from './DashBord/DashBord_Page/AdminAnnouncementForm/AdminAnnouncementForm';
import PrivateRuter from './Proter/PrivateRuter/PrivateRuter';


// Create a client
const queryClient = new QueryClient();



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaOut></MainLaOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'courses_details/:id',
        element:<PrivateRuter>
          <Courses_detels></Courses_detels>
        </PrivateRuter>,
        loader:({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
        path:'join_event/:id',
        element:<PrivateRuter>
          <Joinevent></Joinevent>
        </PrivateRuter>,
        loader:({params})=>fetch(`http://localhost:5000/events/${params.id}`)
       
      },
      {
        path:'blog_detels/:id',
        element:  <PrivateRuter>
          <Blog_detels></Blog_detels>
        </PrivateRuter>,
        loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
      },
      {
        path:'course',
        element:<Navbar_Courses></Navbar_Courses>
      },
      {
        path:'academic',
        element:<Academini></Academini>
      },
      {
        path:'about',
        element:<Abouts></Abouts>
      },
      {
        path:'admissions',
        element:<Admissions></Admissions>
      },
      {
        path:'applycation_from',
        element:<PrivateRuter>
          <StudentApplicationForm></StudentApplicationForm>
        </PrivateRuter>
      },
      {
        path:'blog_page',
        element:<Blog_page></Blog_page>
      },
      {
        path:'contact_page',
        element:<Contack_page>
          
        </Contack_page>
      },
      {
        path:'my_applications',
        element:<PrivateRuter>
          <My_applicatons></My_applicatons>
        </PrivateRuter>,
      },{
        path:'login',
        element:<Login></Login>
      },
      {
        path: 'signup',
        element: <SignupForm></SignupForm>
      },
      {
        path:'announcements',
        element:<Announcements></Announcements>
      },
      
     
    ]
  },
  {
    path:'/dashbord',
    element:<Dashbord></Dashbord>,
    children:[
        {
          path:'all_user',
          element:<All_users></All_users>
        },
        {
          path: 'adminhome',
          element: <Admin_home></Admin_home>
        },
        {
          path:'coursePost',
          element:<CoursePost></CoursePost>
        },
        {
          path:'admin_blog',
          element: <Admin_blog></Admin_blog>
        },
        {
          path:'manage_applications',
          element: <Manage_Applications></Manage_Applications>
        },
        {
          path:'announcements',
          element:<AdminAnnouncementForm></AdminAnnouncementForm>}

        
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
   <Provider>
   <RouterProvider router={router} />
   </Provider>
    </QueryClientProvider>
  </StrictMode>
);
