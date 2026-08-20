// child component
function ButtonWithAction({label,onClick}) {
    return(
        <button className="action-btn" onClick={onClick}>{label}</button>
    );
}
 //parent component
     function ButtonDemo(){
        function handleGreet(){
             alert("Hello from parent!");
        }
        function handleShowInfo(){
            alert("Info Button clicked");
        }
        return(
            <>
            <h2>Buttons with props</h2>
            <ButtonWithAction label="Greet" onClick={handleGreet}/>
            <ButtonWithAction label="Show Info" onClick={handleShowInfo}/>
            </>
        );
    }
    export default ButtonDemo;
    