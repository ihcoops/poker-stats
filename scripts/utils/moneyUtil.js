/*
function to format display of money

56 --> $56
-123 --> -$123

*/

export function formatCurrency (amount) {
    let final = '';
    if(amount < 0) {
        final = `-$${-1*amount}`;
    }
    else if(amount > 0) {
        final = `$${amount}`;
    }
    else {
        final = '$0';
    }

    return final;
}