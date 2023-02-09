import Accordion from 'react-bootstrap/Accordion';

function FAQcard(props) {

  return (
    <div className='ques-ans-card'>
        <Accordion.Item eventKey={props.id}>
        <Accordion.Header>{props.question}</Accordion.Header>
        <Accordion.Body>
          {props.answer}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  )
}

export default FAQcard