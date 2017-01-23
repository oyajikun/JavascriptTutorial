/**
 * Created by tomoya.igarashi on 2017/01/20.
 */
if (window.console) {
    console.log("Welcome to JavaScript!");

    var requestStream = Rx.Observable.create(function(observer) {
        observer.next("https://api.github.com/users");
    });

    var responseStream = requestStream.flatMap(function(requestUrl) {
        return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
    });

    responseStream.subscribe(function(response) {
        console.table(response);
    });
}
