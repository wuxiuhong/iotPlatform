export function websocket() {
    const ws = new WebSocket("ws://localhost:8090");
    // Set event handlers.
    ws.onopen = function () {
        console.log("Connection established");
    };
    ws.onmessage = function (e) {
        // e.data contains received string.
        const json = JSON.parse(e.data);
        console.log(json);
        // if (json.type === 'authentication' && json.status === 'success') {
        //     document.getElementById("login").style.display = "none";
        //     document.getElementById("message").style.display = "block";
        // }
        // else if (json.type === 'authentication' && json.status === 'fail') {
        //     console.log("Login Failed");
        // }
        // else if (json.type === 'message') {
        //     console.log("Message from " + json.from + " : " + json.message);
        // }
    };
    ws.onclose = function () {
        console.log("onclose");
    };
    ws.onerror = function () {
        console.log("onerror");
    };
}
