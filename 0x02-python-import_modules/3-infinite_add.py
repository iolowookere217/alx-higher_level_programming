#!/usr/bin/python3

import sys

if __name__ == '__main__':

    sys.argv.pop(0)

    sum = 0

    for number in sys.argv:

        sum += int(number)

        print("{}".format(sum))
