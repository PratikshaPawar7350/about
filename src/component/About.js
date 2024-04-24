import React from 'react';
import { Container, Row, Col, Card,Image  } from 'react-bootstrap';
import '../css/Style.css'; // Ensure this path is correct

const About = () => {
  return (
    <Container fluid className="about-section px-5">
      <Row>
        <h2>About</h2>
        <h1 className="heading-margin" style={{ marginBottom: '-13px' }}>Where Talent</h1>
        <h1 className="heading-margin">Meet Opportunities</h1>
        <p className='heading2'>The Largest community engagement platform built to help talent be DreamsGuider.com</p>
        <Col md={6} className="d-flex justify-content-center align-items-center"> {/* Center column */}
          <Card className="custom-card" style={{ border: '3px solid rgb(121 127 133)' }}> {/* Apply custom styles */}
            <Card.Body>
              <Card.Title ><b>DreamsGuider.com believes that you can</b></Card.Title>
              <Card.Text style={{ color: '#2196F3' ,'font-size': '1.1rem'}}>
  #DreamsGuider.com
</Card.Text>

            { /* <a href="#" className="btn btn-primary">Go somewhere</a>*/}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <div className="about-content">
          <h2  className="headingabout"style={{ color: '#2196F3' }}>DreamsGuider.com</h2>
            <div className='about-content1'>
            <p className='paragraph'>
            Derived from the belief to #DreamsGuider.com, is a
community engagement and education platform for students and techar and parent and where talent
 meets oppotunities.

            </p>
            </div>
            <p className='paragraph'>
            Founded by <b>Vikram Waykar</b> , DreamsGuider.com is a
playground for this talent to learn,upskill,showcase their 
skills.The platform connects students across domain in INDIA
to a world has a community of 7million+ students.
These companies interact with students , teachar , parent and early professionals at DreamsGuider.com and leverage the platform’s expertise to build their dream teams.
  </p>
  <p className='paragraph' style={{ color: '#2196f3' }}>
  DreamsGuider.com Journey So far!
</p>

            <p className='paragraph' >
            Established as a blog by <b> Vikram Waykar </b> ,a computer science grad at heart, DreamsGuider.com aims to be the largest career transformation platform that decomcratizes learning, memtorship competitions  </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        
      <Col md={4} className="mx-auto">
          <Card className="custom-card1" style={{ border: '3px solid rgb(121 127 133)', 'margin': '2rem auto', ' margin-bottom':' 2rem',    'background-color': '#03A9F4' }}>
            <Card.Body>
              <Card.Title  className ="classcard"style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Software</Card.Title>
              <Card.Text >
              Programming made the 
impossible possible
              </Card.Text>
              <Image fluid rounded src="educational.png" className="img-fluid" />
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row className="mt-4 justify-content-center">
        <Col md={4} className="mx-auto">
  <Card className="custom-card1" style={{ border: '3px solid rgb(121 127 133)', margin: '2rem auto', marginBottom: '2rem', backgroundColor: '#e5b9ed' }}>
    <Card.Body>
      <Row>
        {/* First Column for Title and Text */}
        <Col xs={12} md={6}>
          <Card.Title className ="classcard" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Education</Card.Title>
          <Card.Text>
            The future belongs to those who believe in the beauty of their dreams
          </Card.Text>
        </Col>
        {/* Second Column for Image */}
        <Col xs={12} md={6} className="text-center">
          <Image src="educational.png" fluid rounded />
        </Col>
      </Row>
    </Card.Body>
  </Card>
</Col>
</Row>
<Row className="mt-4 justify-content-center">
        <Col md={4}>
          <Card className="custom-card1" style={{ border: '3px solid rgb(121 127 133)' ,'margin': '2rem auto',   ' margin-bottom':' 2rem',    'background-color':' #FF9800' }}>
            <Card.Body>
              <Card.Title className ="classcard"style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Advertising</Card.Title>
              <Card.Text >
              Programming made the 
impossible possible
              </Card.Text>
              <Image src="educational.png" fluid rounded />
            </Card.Body>
          </Card>
        </Col>
        
      </Row>

    </Container>
  );
};

export default About;