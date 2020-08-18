import React, { Component } from "react";

class Searchbar extends Component {
    // const [name, setName] = useState("");
    state = {
        fullName: "",
        phone: "",
        email: "",
        dob: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        value={this.state.fullName}
                        name="fullName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Search by Full Name"
                    />
                </form>
                <hr></hr>
            </div>
        );
    }
}

export default Searchbar;