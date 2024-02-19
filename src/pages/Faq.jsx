import React from 'react'
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <Container>
      <Accordion className='mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header> How much does a new website cost?</Accordion.Header>
        <Accordion.Body>
        The cost of a new website depends on various factors, such as the complexity, functionality, design, and platform of the website. A custom website can range from a few hundred to thousands of dollars, depending on your needs and preferences. A professional web development company can provide you with a quote after analyzing your project requirements and goals.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How long does it take to build a website?</Accordion.Header>
        <Accordion.Body>
        The time required to build a website also varies depending on the scope and scale of the project. A simple website can take a few weeks, while a complex website can take several months. A web development company can give you an estimated timeline after discussing your project details and expectations.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What technologies do you use?</Accordion.Header>
        <Accordion.Body>
        The choice of technologies depends on the type and purpose of the website. Some of the common technologies used for web development are HTML, CSS, JavaScript, PHP, WordPress, Shopify, Laravel, and more. A web development company can suggest the best technologies for your website based on your needs and budget.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Will my website be mobile-friendly?</Accordion.Header>
        <Accordion.Body>
        A mobile-friendly website is essential for reaching and engaging more users, as well as improving your search engine rankings. A web development company can ensure that your website is responsive, meaning that it adapts to different screen sizes and devices. A responsive website can enhance the user experience and performance of your website.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  )
}

export default Faq