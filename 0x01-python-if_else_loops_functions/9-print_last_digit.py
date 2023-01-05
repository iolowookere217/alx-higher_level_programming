#!/usr/bin/python3
def print_last_digit(n):
    if n < 0:
        n = -n
    ld = n % 10
    print(ld, end="")
    return ld
