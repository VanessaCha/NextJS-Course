import Link from 'next/link';

function HomePage(){
    return(
        <div>
            <h1>The Home Page</h1>
            <ul>
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="/clients">Clients</a>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;