import React from 'react';
import { InputGroup, Form, Navbar } from 'react-bootstrap';
import { FaSearch  } from 'react-icons/fa';
import "./Search.scss";
const Search = ({ handleChange, handleSubmit, search }) => {
    return (
    <>
     <Navbar expand="lg" className="d-flex align-items-center justify-content-end">
      <Form
        inline
        className="form_search"
        onSubmit={handleSubmit}
     >
      <InputGroup className="mb-3 input_group">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1" className="icon">
          <FaSearch />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        type="text"
        placeholder="Search for a movie..."
        className="form_input"
        aria-label="search"
        onChange={handleChange}
        value={search}
      />
      </InputGroup>
      </Form>
    </Navbar>

  </>
   );
}
export default Search;
