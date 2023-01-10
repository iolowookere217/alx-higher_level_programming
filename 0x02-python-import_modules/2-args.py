#!/usr/bin/python3

if __name__ == '__main__':

    import sys

    sys.argv.pop(0)

    argvlength = len(sys.argv)

    if (argvlength == 0):

        print("{:d} arguments.".format(argvlength))

    elif (argvlength == 1):

        print("1 argument:")

        print("{:d}: {}".format(argvlength, sys.argv[0]))

    else:

        print("{:d} arguments:".format(argvlength))

        number = 1

        for argument in sys.argv:

            print("{:d}: {}".format(number, argument))

            number += 1
