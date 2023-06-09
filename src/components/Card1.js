import {Button, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./Card1.css"

function Card1() {
    return (
        <>
            <div className="img">
                <h2 className='h2' style={{ marginTop: "22px" }}>
                    <b>View Proposals</b>
                </h2>
                <div className="main">
                    <div className='main1'>

                        <Card className="card1">
                            <Card.Header><b>Fake NFT to Purchase</b> : 1</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Deadline : 2/24/2023 , 4:48:48 AM</ListGroup.Item>
                                    <ListGroup.Item>Yay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Nay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Executed : False</ListGroup.Item>
                                    <br></br>
                                </ListGroup>
                                <div className="buttons">
                                    <Button variant="info" className = "btn">Yay Vote</Button>
                                    <Button variant="info">Nay Vote</Button>
                                </div>

                            </Card.Body>

                        </Card>
                        <Card className='card1'>
                            <Card.Header><b>Fake NFT to Purchase</b> : 1</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Deadline : 2/24/2023 , 4:48:48 AM</ListGroup.Item>
                                    <ListGroup.Item>Yay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Nay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Executed : False</ListGroup.Item>
                                    <br></br>
                                </ListGroup>
                                <Button style={{ width: '100%' }} variant="info">Execute Proposal</Button>
                            </Card.Body>

                        </Card>
                        <Card className='card1'>
                            <Card.Header><b>Fake NFT to Purchase</b> : 1</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Deadline : 2/24/2023 , 4:48:48 AM</ListGroup.Item>
                                    <ListGroup.Item>Yay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Nay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Executed : False</ListGroup.Item>
                                    <br></br>

                                </ListGroup>
                                <Button style={{ width: '100%' }} variant="info">Execute Proposal</Button>
                            </Card.Body>

                        </Card>
                        <Card className='card1'>
                            <Card.Header><b>Fake NFT to Purchase</b> : 1</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Deadline : 2/24/2023 , 4:48:48 AM</ListGroup.Item>
                                    <ListGroup.Item>Yay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Nay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Executed : False</ListGroup.Item>
                                    <br></br>

                                </ListGroup>
                                <Button style={{ width: '100%' }} variant="info">Execute Proposal</Button>
                            </Card.Body>

                        </Card>
                        <Card className='card1'>
                            <Card.Header><b>Fake NFT to Purchase</b> : 1</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Deadline : 2/24/2023 , 4:48:48 AM</ListGroup.Item>
                                    <ListGroup.Item>Yay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Nay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Executed : False</ListGroup.Item>
                                    <br></br>

                                </ListGroup>
                                <Button style={{ width: '100%' }} variant="info">Execute Proposal</Button>
                            </Card.Body>

                        </Card>
                        <Card className="card1">
                            <Card.Header><b>Fake NFT to Purchase</b> : 1</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Deadline : 2/24/2023 , 4:48:48 AM</ListGroup.Item>
                                    <ListGroup.Item>Yay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Nay Votes : 1</ListGroup.Item>
                                    <ListGroup.Item>Executed : False</ListGroup.Item>

                                    <br></br>

                                </ListGroup>
                                <Button style={{ width: '100%' }} variant="info">Execute Proposal</Button>
                            </Card.Body>

                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card1;
