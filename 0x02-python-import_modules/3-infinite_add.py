#!/usr/bin/python3

if __name__ == "__main__":

    import sys

    sum = int(0)

    for i in range(1, len(sys.argv)):

        sum += int(sys.argv[i])

        print("{}".format(sum))
