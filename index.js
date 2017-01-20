/**
 * Created by tomoya.igarashi on 2017/01/20.
 */
if (window.console) {
    console.log("Welcome to JavaScript!");

    //イベントの元となる配列
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //配列から配列の要素ごとに10回イベントが起きる発生源を作成する。
    var source = Rx.Observable.from(array);

    //イベントを受け取るよう指定する(配列の要素を10回受け取る)
    //これでイベントの処理の流れが決まった。
    source.subscribe(function (x) {
        console.log(x);
    });
}
