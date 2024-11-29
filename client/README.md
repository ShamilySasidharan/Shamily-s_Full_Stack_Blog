# Blog

- creating a full stack react project for the learning purpose, mainly for crud operation and tailwind.
- created static pages first with tailwind css.
- All the file will be created in the src folder inside the components folder
- routes(pages) are created separately for routing and the component will load on each pages.

# Planing

Creation of Navbar

- consist of the logo with name and menus for mobile view and Links for desktop view.
- from the md to xl screen desktop view will be visible.
- for the small screen mobile view will be visible
- created the menu list for the mobile view

- # Image kit for react image optimization
- It is used for the uploading the images into a library and we wil fetch from them.
- Support many library for uplaoding the images and support other image kit features for the images.
  --- Features like the lazy loading etc can be added to the image if taken from the image kit.
- lazy loading render the image only when we needed etc
- setup:
  npm install -f imagekit-react-app (\*\*\* -f is important)
  (we are building this in react 19 and it is not a stable version if we runteh command npm install imagekit-react-app will install in the react 18 and will cause errror)
- # Routing is done inside the main.js
- # Creation of the layout

  Navbar is common to all the pages so,better create a layout
  layout
  |-Mainlayout.js
  |-<Navbar/>
  |-<Outlet> the outlet is coming fromt the reat-router-dom
  component used as a placeholder for rendering child routes

         provide element as <MainLayout> and childern in main.jsx

- Provide the <Link></Link> to Desktop view

- Authentication for user using - Clerk (a third party library for the user auth)
  - using the clerk platform for the user auth
  - it is a user management syestem.
    steps : - Signup - fill the application name and sign in options
    google,username,git account etc - Then choose the framework - react - Make sure to use the flag -f while installing (only for this project because react 19 is not stable yet while creating this project) - Then copy the key to env - Import the key to main.js - Then provide to the entire app - for user auth and to get the user information anywhere in the app

(There is a btn for signup and signin in the form and it should show the signup and signin accordingly)

- just provide the <SignIn/> to the login page we dont have to write any line of code already created.
  <SignIn signUpUrl="/signup"/> - if clicked on signup btn go to signup url page.

- In the Signup page import the SignUp component and signin url
  <SignUp signIn="/login"/> - after sign up go to the login url

#### Questions in auth : why we need a third party auth? why cannot we do it ?

# if so how to do it?

- previous project included the auth of firebase for this

# Creation of the Featured post and Other Post

- Created the featured post and other posts

# Created PostListItems

# Created SinglePostList page

# Created the Comments and Comment page

# created the WritePage 
  React Quill is a popular rich text editor built for React applications. 
  It provides an easy way to add a WYSIWYG (What You See Is What You Get) editor, allowing users to write and format text directly in a UI with options like bold, italics, headers, and more. It’s based on Quill.js, a powerful and extensible JavaScript library for text editing.

  setup :
  - npm i -f react-quill-new  (new is added because we added a lataest version of quill and is not stable so we     cannot use the npm i -f react-quill)
    - then import the react quill
        import 'react-quill-new/dist/quill.snow.css';
        import ReactQuill from "react-quill-new";

    - and use it inside the component
        <ReactQuill theme="snow" value={value} onChange={setValue} /> check in Writepage.jsx
        