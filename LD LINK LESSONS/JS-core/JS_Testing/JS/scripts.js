function compare(a, b) { 
    let number_a = parseInt(a); 
    let number_b = parseInt(b); 
    if (number_a > number_b) { 
    return 1; 
    } else if (number_b > number_a) { 
    return -1; 
    } else { 
    return 0; 
    }  
    }