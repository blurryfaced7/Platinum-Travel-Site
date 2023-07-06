exports.handler = function(event, context, callback) {

    const secretContent = `
    <h3> Hereglegchiin tusgai huudsand tavtai morilno uu!</h3>
    <p>Zuvhun durtgeltei hereglegchded zoriulsan <strong>haalttai contentuud</strong></p>
    ` 
    let body;

    if(event.body) {
        body = JSON.parse(event.body);

    }
    else {
        body = {}
    }

    if(body.password == "JavaScript") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    }
    else {
        callback(null, {
            statusCode: 401
        })
    }

    
}