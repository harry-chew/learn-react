const Home = () => {

    const handleClick = (e) => {
        console.log('hello ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <div className="content">
                <h2>Homepage</h2>
                <button onClick={handleClick}></button>
                <button onClick={(e) => handleClickAgain('mario', e)}>Click Me</button>
            </div>
        </div>
     );
}
 
export default Home;