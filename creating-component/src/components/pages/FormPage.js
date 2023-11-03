import InputComponent from "../InputComponent"
import RegistrationForm from "../RegistrationForm"
import TextInputWithFocusButton from "../TextInputWithFocusButton"

function FormPage(){
    return(
        <div>
            <InputComponent/>
            <RegistrationForm/>
            <TextInputWithFocusButton/>
        </div>
    )
}

export default FormPage;