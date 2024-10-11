import { useState } from "react"
import FaqAccordion from "./FaqAccordion"

const faqs = [
    {
        question: 'Seberapa lama web ini dibuat',
        answer: 'Se lama berapa lupa 😛'
    },
    {
        question: 'Seberapa lama Nasi Goreng ini dibuat',
        answer: 'Se lama berapa 2 hari 😂'
    },
    {
        question: 'Seberapa lama Mie Goreng ini dibuat',
        answer: '😂'
    },
    {
        question: 'Seberapa lama Mie Goreng ini dibuat',
        answer: '😂'
    },
    {
        question: 'Seberapa lama Mie Goreng ini dibuat',
        answer: '😂'
    },
    {
        question: 'Seberapa lama Mie Goreng ini dibuat',
        answer: '😂'
    },
    {
        question: 'Seberapa lama Mie Goreng ini dibuat',
        answer: '😂'
    },
    {
        question: 'Seberapa lama Mie Goreng ini dibuat',
        answer: '😂'
    },
    {
        question: 'Seberapa lama Mie Goreng ini dibuat',
        answer: '😂'
    },
    {
        question: 'Seberapa lama Mie Goreng ini dibuat',
        answer: '😂'
    },
]

function Faq(){

    const [currFaq, setCurrFaq] = useState(null)

    
    
    return (
        <>
            <h1>FAQ</h1>
            {faqs.map((item, index) => <FaqAccordion key={index} no={index + 1} que={item.question} ans={item.answer} ygDiKlik={currFaq} setKlik={setCurrFaq} />)}
        </>
    )
}

export default Faq