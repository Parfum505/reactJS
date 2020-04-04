import React, { Component } from 'react';
import { Form, InputGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchInput extends Component {
    search () {
        console.log('search');
    }
    render() {
        return (
            <Form>
                <Form.Group>
                    <InputGroup>
                        <Form.Control type="text" placeholder="Type the book title here" />
                        <InputGroup.Append onClick={() => this.search()}>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={ faSearch } />
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        );
    }
}

export default SearchInput;