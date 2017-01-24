/**
 * Created by tomoya.igarashi on 2017/01/23.
 */

if (window.console) {
    console.log("tutorial.js : Welcome to JavaScript!");

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var source = Rx.Observable.from(array);

    var filtered = source.filter(function (x) {
        if ((x % 3) == 0) {
            return true;
        }
    });

    var mapped = filtered.map(function (x) {
        var xs = ["-", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
        return xs[x];
    });

    mapped.subscribe(function (x) {
        console.log(x);
    });

    var two = Rx.Observable.timer(2000).mapTo("2secs");
    var four = Rx.Observable.timer(4000).mapTo("4secs");

    var merged = two.merge(four);
    merged.subscribe(function (x) {
        console.log(x);
    });
}
