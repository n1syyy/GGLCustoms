import React, { useState } from 'react'
import {Button, Col, Row, Form} from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useNavigate()
    let location = useLocation()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            history(`/?keyword=${keyword}&page=1`)
        }else {
            history(history(history.location.pathname))
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Col>
                    <Form.Control
                    type='text'
                    id='search-box'
                    name='q'
                    onChange={(e) => setKeyword(e.target.value)}
                    className='me-sm-3 ms-sm-5'
                    ></Form.Control>
                </Col>

                <Col>
                    <Button
                        type='submit'
                        variant='outline-success'
                        className='p-2'
                    >
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox
