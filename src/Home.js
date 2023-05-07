import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName('luigi');
        setAge(30);
    }


    return ( 
        <div className="home">
            <div className="content">
                <h2>Homepage</h2>
                <p>{ name } is { age } years old.</p>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
     );
}
 
export default Home;