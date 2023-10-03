export default function Greet(){
    let message = "ji";
    let styling = {};

    const date = new Date();

    let hr = date.getHours();
    if (hr < 12 && hr >= 1) {
        message = "Good Morning";
        styling.color = "Yellow";
    }
    else if (hr >= 12 && hr < 19) {
        message = "Good Afternoon";
        styling.color = "Orange";
    }
    else {
        message = "Good Night";
        styling.color = "Blue";
    }
    return (
        <h1>
            Hello Sir, <span style={styling}>{message}</span>
        </h1>
    );
}