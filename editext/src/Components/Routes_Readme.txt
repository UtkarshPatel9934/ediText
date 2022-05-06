1. npm install react-router-dom@6 in pwsh


2. import { BrowserRouter } from "react-router-dom"; in the index.js file of SRC

3.  <BrowserRouter> </BrowserRouter>
in the index.js file of SRC
eg:
<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>



4. import { Routes, Route, Link } from "react-router-dom"; in the src/App.js file of SRC

5. Format is :

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
</Routes>



6. <a href="/about">About</a> change to <Link to="/about">About</Link> in the src/Navbar.js file of SRC



7. 

always use "exact" keyword in the <Route></Route> tags

<Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
</Routes>


because there will be conflict in using:

/users --> Component 1
/users/home --> Component 2







React Router Dom Link: https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app
