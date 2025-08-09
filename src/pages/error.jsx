import MainNavigation from "../components/MainNavigation";
import NavButtons from "../components/NavButtons";

function Error() {
    return <>
        <MainNavigation/>
        <main>
            <h1>This page is not valid.</h1>
            <img src="https://media.tenor.com/-iiMZcIHkE8AAAAM/sad-emoji.gif" alt="sadge emoji"/>
            <br/>
            <p>Creative expression can have its limits unfortunately.<br/>Use one of these links below to get to a valid page.</p>
            <div className='center'>
                <span className='block'></span>
                <NavButtons/>
                <span className='blocke'></span>
            </div>
        </main>
    </>
}

export default Error