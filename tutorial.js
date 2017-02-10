/**
 * Created by tomoya.igarashi on 2017/01/23.
 */

if (window.console) {
    console.log("tutorial.js : Welcome to JavaScript!");

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let source = Rx.Observable.from(array);

    let filtered = source.filter(function (x) {
        if ((x % 3) == 0) {
            return true;
        }
    });

    let mapped = filtered.map(function (x) {
        var xs = ["-", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
        return xs[x];
    });

    mapped.subscribe(function (x) {
        console.log(x);
    });

    let two = Rx.Observable.timer(2000).mapTo("2secs");
    let four = Rx.Observable.timer(4000).mapTo("4secs");

    let merged = two.merge(four);
    merged.subscribe(function (x) {
        console.log(x);
    });

    let button = document.getElementById("button");
    let clickStream = Rx.Observable.fromEvent(button, 'click');
    clickStream.subscribe(() => {
        console.log("clicked");
    });
}
