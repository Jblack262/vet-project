import React from 'react'

function Form() {
    const questions = [
        {
            id: 1,
            title: 'Question?',
            placeholder: 'placeholder'
        },
        {
            id: 2,
            title: 'Question?',
            placeholder: 'placeholder'
        }
    ];
    return (
        <form className='adopt-form'>
            <h1 className='form-title'>Adoption Application</h1>
            {questions.map(question=>{
                return (
                    <div key={question.id} className='question'>
                            <h1>{question.title}</h1>
                            <input type='text' placeholder={question.placeholder}></input>
                    </div>
                )
            })}
        </form>
    )
}

export default Form
