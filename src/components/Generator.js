import React, {Component} from "react"
import $ from "jquery"
import domtoimage from "dom-to-image"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Button,Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStamp } from '@fortawesome/free-solid-svg-icons'
import { copyImageToClipboard } from 'copy-image-clipboard'



class Generator extends Component {

    constructor() {
        super();
        this.state = {
            user_text: "",
            randomImg: process.env.PUBLIC_URL + "/cards/500.png",
            allMemeImgs: [],
            count: 0,
            favImage: "",
            card_generated: "",
            lang: false,
            showHide : false

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCopy = this.handleCopy.bind(this)

    }



    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    copyToClipboard() {
        //copyImageToClipboard(this.dataUrl)

    }




    handleChange(event){
        const {name, value} = event.target
        name === "favImage" ? this.setState({ randomImg: event.target.value }) : this.setState({[name]: value})
    }

    handleSubmit(event){

        event.preventDefault()

        //get a a random number
        //const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)

        // get the meme from that index
       // const randMemeImg = this.state.allMemeImgs[randNum].url

        // set "randomImg" to the ".url"  of the random item I grabbed
       // this.setState({ randomImg: randMemeImg})

    }

    handleCopy(event){

        event.preventDefault()

        // Copy the content of the "card" DIV and make it an image
        const render = node =>
                domtoimage.toPng(node)
                    .then(dataUrl => {
                        console.log(performance.now() - pf)
                        const img = new Image();
                        img.src = dataUrl;
                        copyImageToClipboard(dataUrl);

                        //$('.card_generated').append(this.state.count > 0 && "<hr />").append("<h2>Image # " + this.state.count+ "</h2>")
                        $('.card_generated').append(img)
                        $('.hidden').show();

                    })
                    .catch(error =>
                        console.error('oops, something went wrong!', error)
                    ),

            card_generated = document.getElementById('card');

        var pf = performance.now();
        render(card_generated);

        // Increment the value of count
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })

        // scroll down to new image
        //window.scrollTo(0,document.body.scrollHeight);

        this.handleModalShowHide()

    }

    closeModal() {
        $('.hidden').hide();
    }



    render() {

        return(
            <main>





                <Navbar expand={false}>
                    <Container >
                        <Navbar.Brand href="#">Organization Name</Navbar.Brand>
                        {/*<Navbar.Toggle aria-controls="offcanvasNavbar" />*/}
                        {/*<Navbar.Offcanvas*/}
                        {/*    id="offcanvasNavbar"*/}
                        {/*    aria-labelledby="offcanvasNavbarLabel"*/}
                        {/*    placement="end"*/}
                        {/*>*/}
                        {/*    <Offcanvas.Header closeButton>*/}
                        {/*        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>*/}
                        {/*    </Offcanvas.Header>*/}
                        {/*    <Offcanvas.Body>*/}
                        {/*        <Nav className="justify-content-end flex-grow-1 pe-3">*/}
                        {/*            <Nav.Link href="#action1">Home</Nav.Link>*/}
                        {/*            <Nav.Link href="#action2">Link</Nav.Link>*/}
                        {/*            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">*/}
                        {/*                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>*/}
                        {/*                <NavDropdown.Divider />*/}
                        {/*                <NavDropdown.Item href="#action5">*/}
                        {/*                    Something else here*/}
                        {/*                </NavDropdown.Item>*/}
                        {/*            </NavDropdown>*/}
                        {/*        </Nav>*/}
                        {/*        <Form className="d-flex">*/}
                        {/*            <FormControl*/}
                        {/*                type="search"*/}
                        {/*                placeholder="Search"*/}
                        {/*                className="me-2"*/}
                        {/*                aria-label="Search"*/}
                        {/*            />*/}
                        {/*            <Button variant="outline-success">Search</Button>*/}
                        {/*        </Form>*/}
                        {/*    </Offcanvas.Body>*/}
                        {/*</Navbar.Offcanvas>*/}
                    </Container>
                </Navbar>











<div className="generator">

                <form className="card-form" onSubmit={this.handleSubmit}>




                    <br /> <br />

                    <FloatingLabel controlId="floatingTextarea" label="Your Name" className="mb-3">
                        <Form.Control
                            as="textarea"
                            name="user_text"
                            placeholder="Leave a comment here"
                            value={this.state.user_text}
                            onChange={this.handleChange}
                            style={{ height: '100px' }}
                            dir="rtl"
                        />
                    </FloatingLabel>





                    <br />

                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    name="bottomText"*/}
                    {/*    value={this.state.bottomText}*/}
                    {/*    placeholder="Signature:"*/}
                    {/*    onChange={this.handleChange}*/}
                    {/*/>*/}

                    <br />

                </form>


    <h2>Preview</h2>
                <div id="card" className="card">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="user_text">{this.state.user_text}</h2>
                    {/*<h2 className="bottom">{this.state.bottomText}</h2>*/}
                </div>

                <Button id="buttonCopy"
                        variant="success"
                        size="lg"
                        className="mt-3"
                        onClick={this.handleCopy}>
                    <FontAwesomeIcon icon={faStamp} />   Generate an Image

                </Button>












                <div className="hidden">



                    <br />
                    {/*<div className="card_container">*/}
                    {/*    <div className="close" onClick={this.closeModal}>X</div>*/}

                    {/*        <h1>Copy the image{this.state.count > 1 && "s"} from below</h1>*/}

                    {/*    <span className="card_generated"></span>*/}
                    {/*</div>*/}
                </div>

                <br />
                <br />









    <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.state.showHide}>
        <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>
                Your Image in The Clipboard Just Paste it!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div className="card_container">

                <span className="card_generated"></span>

            </div>


        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                Close
            </Button>

        </Modal.Footer>
    </Modal>




</div>
            </main>
        )
    }

}

export default Generator
