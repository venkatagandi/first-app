
var numbers = Rx.Observable.interval(1000);

var observer = {
     next: function(val) {
         console.log(val);
     },
     error: function(err) {
         console.log(err);
     },
     complete: function() {
         console.log('completed');
     }
}

numbers
.filter((val)=>  val%2===0)
.subscribe(observer);


























// var buttonM = document.getElementById('clickMeBtn');

// var observer = {
//     next: (value) => console.log(value.clientX),
//     error: (err) => console.log(err),
//     complete:() => console.log('completed')
// }

// Rx.Observable.create(function(obs){
//     obs.next('A value');
// }).subscribe(observer);

// // Rx.Observable.fromEvent(buttonM,'click')
// // .subscribe((value) => console.log(value.clientX),
// // (err) => console.log(err),
// // () => console.log('completed')
// // );

