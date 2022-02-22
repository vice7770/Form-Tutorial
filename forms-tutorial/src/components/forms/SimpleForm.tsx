import { ChangeEvent, useState } from "react";
import {Form, updateForm} from './../../lib/api'


function SimpleForm() {
  const [inputFields, setInputFields] = useState<any>([
    {name: '', age: ''}
  ])

  const handleFormChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const submit = (e : any) => {
    e.preventDefault();
    console.log(inputFields);
    updateForm(inputFields);
}

  return (
    <div className="simpleform">
        <form onSubmit={submit}>
          {inputFields.map((input : any, index : any) => {
            return (
              <div key={index}>
                <input className="simpleformInput"
                  name='name'
                  placeholder='Name'
                  value={input.name}
                  onChange={event => handleFormChange(index, event)}
                />
                <input className="simpleformInput"
                  name='age'
                  placeholder='Age'
                  value={input.age}
                  onChange={event => handleFormChange(index, event)}
                />
              </div>
            )
          })}
      </form>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
  
  export default SimpleForm;