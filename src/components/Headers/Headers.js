import React, { Component } from "react";

class Headers extends Component {
    // $("#sortName").click(function() {
    //     $("#sortName").css("font-weight", "bold")
    // });

    // bold = () => {
    //     this.$col = $(this.col-md-2);
    //     $for(this).click(function() {
    //         $for(this).css("font-weight", "bold")
    //     });
    // };
    
    render() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-2">
            </div>
            <div className="col-md-2" id="sortName">
                <button>Name</button>
            </div>
            <div className="col-md-2" id="sortPhone">
                Phone
            </div>
            <div className="col-md-2" id="sortEmail">
                E-mail
            </div>
            <div className="col-md-2" id="sortDob">
                DOB
            </div>
        </div>
    )
}
}


export default Headers;