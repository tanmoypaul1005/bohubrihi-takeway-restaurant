import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Col, Input } from 'reactstrap';
class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstnamne: "",
            lastnamne: "",
            telnum: "",
            email: "",
            agree: "",
            contactType: "",
            message: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        document.title = "Contact"
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>

                    <div className="col-12 col-md-7">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstnamne" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" name="firstnamne" placeholder="First Name"
                                        value={this.state.firstName} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastnamne" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" name="lastnamne" placeholder="Last Name"
                                        value={this.state.lastnamne} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel..</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="tel" name="telnum" placeholder="Tel Num"
                                        value={this.state.telnum} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="email" name="email" placeholder="Email"
                                        value={this.state.email} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input onChange={this.handleInputChange} type="checkbox" name="agree"
                                                checked={this.state.agree} />
                                            <strong>May be Contuct You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>

                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input onChange={this.handleInputChange} type="select" name="contactType"
                                        checked={this.state.contactType} >
                                        <option>Tel .</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlfor="message" md={2}>Your FeedBack</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="textarea" name="message" value={this.state.message} rows="12" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" colur="primary">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;