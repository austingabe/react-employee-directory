import React, { Component } from "react";
import API from "../../utils/API";
import Headers from "../Headers/Headers";
import Searchbar from "../Searchbar/Searchbar";

class Results extends Component {
    state = {
        search: "",
        default: [],
        filtered: [],
        filteredResults: [],
        className: "fa fa-fw fa-sort up"
    }

    componentDidMount() {
        this.searchResults();
    }

    searchResults = () => {
        API.search()
            .then(res => this.setState({ default: res.data.results, filtered: res.data.results }))
            .catch(err => console.log(err));
    }

    // If nothing is searched, use default state, which shows all results. Otherwise, filter results.
    filteredResults = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
        if (value === "") {
            this.setState({ filtered: this.state.default })
        } else if (value !== "") {
            const filtered = this.state.default.filter(data => (`${data.name.first} ${data.name.last}`).toLowerCase().startsWith(value.toLowerCase()) || data.name.last.toLowerCase().startsWith(value.toLowerCase()) || data.phone.startsWith(value) || data.phone.replace(/[()-\s]/g, "").startsWith(value) || data.email.toLowerCase().startsWith(value.toLowerCase()) || data.dob.age.toString().startsWith(value.toString()))
            this.setState({ filtered });
        }
    }

    className = (className) => {
        if (className === "fa fa-fw fa-sort up") {
            this.setState({ className: "fa fa-fw fa-sort down" })
        } else if (className === "fa fa-fw fa-sort down") {
            this.setState({ className: "fa fa-fw fa-sort up" })
        }
    }

    // Sorting columns up and down by type
    sortedResults = (e) => {
        const { className, id } = e.target;

        if (className === "fa fa-fw fa-sort up" && id === "name") {
            const sortUp = this.state.filtered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            this.className(className)
            this.setState({ filteredResults: sortUp });

        } else if (className === "fa fa-fw fa-sort down" && id === "name") {
            const sortDown = this.state.filtered.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1)
            this.className(className)
            this.setState({ filteredResults: sortDown });

        } else if (className === "fa fa-fw fa-sort up" && id === "phone") {
            const sortDown = this.state.filtered.sort((a, b) => (a.phone.replace(/[()-\s]/g, "") > b.phone.replace(/[()-\s]/g, "")) ? 1 : -1)
            this.className(className)
            this.setState({ filteredResults: sortDown });

        } else if (className === "fa fa-fw fa-sort down" && id === "phone") {
            const sortDown = this.state.filtered.sort((a, b) => (a.phone.replace(/[()-\s]/g, "") < b.phone.replace(/[()-\s]/g, "")) ? 1 : -1)
            this.className(className)
            this.setState({ filteredResults: sortDown });

        } else if (className === "fa fa-fw fa-sort up" && id === "email") {
            const sortDown = this.state.filtered.sort((a, b) => (a.email.replace(/[@.-_]/g, "") > b.email.replace(/[@.-_]/g, "")) ? 1 : -1)
            this.className(className)
            this.setState({ filteredResults: sortDown });

        } else if (className === "fa fa-fw fa-sort down" && id === "email") {
            const sortDown = this.state.filtered.sort((a, b) => (a.email.replace(/[@.-_]/g, "") < b.email.replace(/[@.-_]/g, "")) ? 1 : -1)
            this.className(className)
            this.setState({ filteredResults: sortDown });

        } else if (className === "fa fa-fw fa-sort up" && id === "age") {
            const sortDown = this.state.filtered.sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1)
            this.className(className)
            this.setState({ filteredResults: sortDown });

        } else if (className === "fa fa-fw fa-sort down" && id === "age") {
            const sortDown = this.state.filtered.sort((a, b) => (a.dob.age < b.dob.age) ? 1 : -1)
            this.className(className)
            this.setState({ filteredResults: sortDown });
        }

    };

    render() {
        return (
            <div>
                <Searchbar
                    search={this.state.search}
                    filteredResults={this.filteredResults}
                />
                <Headers
                    users={this.state.filtered}
                    sortedResults={this.sortedResults}
                    className={this.state.className}
                />
            </div>
        )
    }
}

export default Results;