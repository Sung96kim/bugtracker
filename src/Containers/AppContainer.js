import React, { PureComponent } from "react";
import "./AppContainer.css";
import LoadingSpinner from "../Components/LoadingSpinner";

class AppContainer extends PureComponent{
    render(){
        return(
            <div className="app-container">
                <LoadingSpinner/>
            </div>
        );
    }
}

export default AppContainer;
