#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
n = number
if n < 0:
    ld = (abs(n) % 10) * -1
    print('Last digit of {} is {} and is less than {}\
 and not 0'. format(n, ld, 6))

else:
    ld = n % 10

if ld == 0:
    print('Last digit of {} is {} and is {}'.format(n, ld, 0))

elif ld > 0 and ld <= 5:
    print('Last digit of {} is {} and is less than {}\
 and not 0'.format(n, ld, 6))

else:
    print('Last digit of {} is {} and is greater than {}'.format(n, ld, 5))
