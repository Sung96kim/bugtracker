// import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

export default function Loading(props){
    if(props.loading){
        <Loader 
                type="Bars" 
                color="#00BFFF"    
                height={80} 
                width={80} 
                timeout={3000} 
        />
    }else{
        <Error/>
    }

    return null;
};