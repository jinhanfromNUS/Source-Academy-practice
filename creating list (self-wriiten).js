// creating_list using recursion
//source 2

function ascending(start, end) {
    return start > end
           ? null
           : pair(start, ascending(start + 1, end));
}

function descending(start, end) {
    return start < end
           ? null
           : pair(start, descending(start - 1, end));
}

/*
Alternative descending using ascending

function descending (start, end) {
    return reverse(ascending(end, start));
}
*/

function creating_list(first_digit, second_digit) {
    return first_digit === second_digit
           ? list(first_digit)
           : first_digit < second_digit
           ? ascending(first_digit, second_digit)
           : descending(first_digit, second_digit);
}

creating_list(90, 70);