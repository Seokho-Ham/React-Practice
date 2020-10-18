import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    };
    handleChange = e => {
        //e : event value
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault(); //원래 해줘야 하는 작업을 안하는것.
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        placeholder="이름"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <input
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}
                        value={this.state.phone}
                    />
                    <button type="submit">등록</button>
                    <div>
                        {this.state.name}
                        {this.state.phone}
                    </div>
                </form>
            </div>
        );
    }
}

export default PhoneForm;
