import Form from "./Form";
import './index.css';
import Nav from "./Nav";

export default function Admin() {
    return (
      <div>
        <Nav></Nav>
        <h1>Welcome to Admin Page</h1>
        <h2>Edit Data</h2>
        <Form></Form>
      </div>
    );
}