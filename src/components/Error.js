import { useRouteError } from "react-router";

const Error = () => {
    const error =useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oooops!!!</h1>
            <h2>Something went wrong..... :(</h2>
            <h3>{error.status} : {error.statusText}</h3>
        </div>
    );
};

export default Error;