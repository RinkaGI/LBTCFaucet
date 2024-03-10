import { useState } from "react";
import './css/FaucetForm.css'

const FaucetForm = () => {
    const [formData, setFormData] = useState({wallet: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`LBTC Wallet: ${formData.wallet}`);
    };

    return(
        <form className = "faucet-form" onSubmit={handleSubmit} >
            <div>
                <input className = "form-control" name="wallet" placeholder = "Write your LBTC Wallet" value={formData.wallet} onChange={handleChange} />
            </div>
            <div class="h-captcha" data-sitekey="88acdee5-2833-4221-afae-026ed08a127b"></div>
            <button type = "submit" className = "btn btn-info">Earn</button>
        </form>
    );   
}

export default FaucetForm;