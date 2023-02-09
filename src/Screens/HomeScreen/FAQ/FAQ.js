import './FAQ.css'
import FAQcard from './FAQcard'
import faqData from './faqData'
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {

    const quesAnsCard = faqData.map(item => {
        return (
            <FAQcard 
                key={item.id}
                {...item}
            />
        )
    })

    console.log(quesAnsCard)
  return (
    <div className='faq-main-container'>
        <div>
            <h1 className='faq-h1'>Have questions? Well, we have the answers</h1>
            <h3 className='faq-h3'>Check below for frequently asked questions</h3>
        </div>
        <Accordion className='faq-ques-ans' defaultActiveKey="0">
                {quesAnsCard}
        </Accordion>

    </div>
  )
}

export default FAQ