import React from 'react'

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        type: '',
        expense: '',
        location: '',
        cost: '',
        date: '',
    }
    this.handleChange = this.handleChange.bind(this);

}
handleChange(e) {
    this.setState({name: e.target.value})
}

    render() {
        console.log(this.state.name);
        return (
            <div>
            <form className = 'expense-form'>
                <select id='payment-type' style={{borderRadius: 5}} onChange={this.handleChange} >
                    <option value=''>Select Payment Type</option>
                    <option value='cash'>Cash</option>
                    <option value='credit card'>Credit Card</option>
                    <option value='crypto'>Crypto</option>
                </select>
                <input name='type' id='item-bought' style={{width: 200, borderRadius: 5,}} type= 'text' placeholder='What did you buy?' onChange={this.handleChange} />
                <input name='location' id='purchase-location' style={{width: 200, borderRadius: 5}} type='text' placeholder= 'Where did you buy it?' onChange={this.handleChange}></input>
                <input name='cost' id='amount-spent' style={{width: 200, borderRadius: 5}} type='number' placeholder='How much did you spend?' onChange={this.handleChange}></input>
                <input name='date' id='date-purchased' style={{borderRadius: 5}} type='date' onChange={this.handleChange} />
                <input id='submit-button' style={{width: 100, borderRadius: 5}} type='submit'></input>
            </form>
        </div>
        )
    }
}

export default ExpenseForm
