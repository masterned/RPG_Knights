// teddy :: Integer -> Boolean
const teddy = n => {
    console.log(n);
    if (n === 42) return true;
    if (n < 42) return console.log('.') || false;
    if (!(n%5) && teddy(n-42)) return true;
    if (!(n%2) && teddy(n>>1)) return true;
    if (!(n%3) || !(n%4)) {
        let prod = Math.trunc(n%10) * Math.trunc(n%100/10);
        return !!(prod > 0 && teddy(n - prod));
    }
    return false;
}