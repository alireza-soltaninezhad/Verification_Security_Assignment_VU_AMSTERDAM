function foo(n){
    assume(n>=0);
    var x = 0;
    var y = n;
    while (x <= n-1){
        pred(x <= n);
        pred(x >= n);
        pred(x == n - y);
        y = y - 1;
        x = x + 1;
    }
    assert(y == 0);
    assert(x == n);
}
