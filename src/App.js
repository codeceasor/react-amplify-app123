import logo from './logo.svg';
import './App.css';
import {Formik, Field, Form} from 'formik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h2>hello</h2>
        </p>
        <h3> Signup form </h3>
        <Formik 
        initialValues={{ name: '', email:'',password: ''}}
        onSubmit={(values) => 
          {
            console.log("values,", values)
          }
        }
        >
         <Form>
           <Field name="name" placeholder="Enter name"/>
           <Field name="email" type="email" placeholder="Enter email"/>
           <Filed name="password" type="password" placeholder="Enter password"/>
           <button type="submit"> Signup </button>
           </Form> 
        </Formik>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
