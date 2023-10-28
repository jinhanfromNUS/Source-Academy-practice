// Creating different kind of lists using reccursion

// Return: an ascending list from start to end
// Parameters:
//      start:  the first element of return list
//      end:    the last element of return list
function ascending(start, end) {
    return start > end
           ? null
           : pair(start, ascending(start + 1, end));
}

// Return: an descending list from start to end
// Parameters:
//      start:  the first element of return list (Also biggest)
//      end:    the last element of return list (Also smallest)
function descending(start, end) {
    return start < end
           ? null
           : pair(start, descending(start - 1, end));
}

function descending_using_ascending(start, end) {
    return reverse(ascending(end, start));
}

// Return: a list 
// Parameters:
//      start:  the first element of return list
//      end:    the last element of return list
function enum_with_ascending_descending(initial, end) {
    return initial === end
           ? list(initial)
           : initial < end
           ? ascending(initial, end)
           : descending(initial, end);
}


function enum_list(start, end) {
    return start === end
           ? list(start)
           : start < end
           ? (start < end ? pair (start, building_list(start + 1, end)) : null)
           : (start > end ? pair (start, building_list(start - 1, end )) : null);
}

