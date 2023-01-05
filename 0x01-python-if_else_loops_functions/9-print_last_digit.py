#!/usr/bin/python3
def print_last_digit(n):
    if n < 0:
        ld = (abs(n) % 10) * -1

    else:
        ld = n % 10

        print(ld, end="")
    
    return ld

