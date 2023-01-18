import { StyledAlert } from "../styles";

export default function Alert({ code, msg, setAlert }) {

    // Set style
    let type = 'success';
    if (code === undefined) type = '';
    if (code === 201) type = 'warning';
    if (code >= 400) type = 'error';
    if (code < 400) setTimeout(() => setAlert([]), 1200)

    // A custom message for the most likely error to be found.
    const text = code === 401 ? "You're logged out. -- try refreshing the page or log back in manually" : msg;

    const serverError = (
        <>
            <h2>Error {code}</h2>
            <p>--This website has asked too much of spotify at one time.
                Try again in an ~hour--</p>
        </>
    )
    const visible = code ? 'visible' : '';

    return (
        <StyledAlert>
            <div className={`alert ${type} ${visible}`}>
                <span className={'closebtn'} onClick={() => setAlert([])}>
                    &times;
                </span>
                {code >= 400 ? <h2>Error {code}</h2> : ''}
                {code >= 500 ? serverError : ''}
                <p>{text}</p>
            </div>
        </StyledAlert>
    )
}