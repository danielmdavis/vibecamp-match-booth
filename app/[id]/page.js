import questions from './questions.json'

export default function Question (context) {

    const question = questions.find(i => i.id == context.params.id)
    console.log(question)
    

    return (

      <div className='form'>
        <form>
            <label>{question.text}</label>
            <label>{question.options[0]}</label><input type='radio' placeholder={question.options[0]} />
            <label>{question.options[1]}</label><input type='radio' placeholder={question.options[1]} />
        </form>
      </div>
    )
  }
  