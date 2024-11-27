# Blog 
creating a full react project for the learning purpose mainly crud operation and tailwind
created static pages first with tailwind css 
All the file will be created in the src folder inside the components folder
Utils folder is created to store the images/static file 

# Planing
Creating Navbar
 - consist of the logo with name and menus for desktop and mobile view 
 - for the md screen desktop should be visible
 - for the small screen mobile view
 - created the menu list 
- # Image kit for react image optimization
- used for the uploading the image for free 
- support many library for uplaod the images and support other image kit features.
- lazy loading render the image only when we needed etc
- setup: npm install -f imagekit-react-app (*** -f is important)
(we are building this in react 19 and it is not a stable version if we runteh command npm install imagekit-react-app will install in the react 18 and will cause errror)
- # Routing is done inside the main.js 
- creating the layout
 Navbar is common to all the pages so,better create a layout 
   layout
     |-Mainlayout.js
        |-<Navbar/>
        |-<Outlet> the outlet is coming  fromt the reat-router-dom
            component used as a placeholder for rendering child routes
        provide element as <Mainoutlet> and childers of route in the main.jsx
provide the <Link></Link> to the areas of links

- Authentication for user using - Clerk
    - using the clerk platform for the user auth
    - it is a user management syestem 
    steps : 
            - Signup 
            - fill the application name and sign in options 
                google,username,git account etc
            - Then choose the framework - react
            - Make sure to use the flag -f while installing (only for this project because react 19 is not stable yet while creating this project)
            - Then copy the key to env
            - Import the key to main.js 
            - Then provide to the entire app - for user auth and to get the user information anywhere in the app
  - just provide the <SignIn/> to the login page we dont have to write any line of code already created.
        <SignIn signUpUrl="/signup"/> and provide the signup url to the signup page

  - In the signup page import the SignUp component and signin url 
    <SignUp signIn="/login"/>
  - There is a btn for signup and signin in the form and it should show the signup and signin accordingly
  - For login 
      <SignIn signUpUrl="/signup"/>  when click on the signup should go to the signup page
  - And for the signup 
      we have a signin btn should go to the login page 
      <SignUp signIn="/login"/>
  
  
  
  - Questions in auth : why we need a third party auth? why cannot we do it ?
  if so how to do it?
  - previous project included the auth of firebase for this 

 - created the featured post and other posts 
 - created post list 

 - create single post list page with details, contents and other user details with post menu actions
 - created the comments 



 
