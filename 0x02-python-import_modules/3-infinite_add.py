#!/usr/bin/python3

import sys

if __name__ == '__main__':

    sys.argv.pop(0)

    sum_total = 0

    for number in sys.argv:

        sum_total += int(number)

    print("{}".format(sum_total))
