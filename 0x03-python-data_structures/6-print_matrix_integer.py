#!/usr/bin/python3

def print_matrix_integer(matrix=[[]]):

    for i in matrix:

        idx = 1

        for j in i:

            if idx == len(i):

                print("{:d}".format(j), end="")

            else:

                print("{:d}".format(j), end=" ")

                idx = idx + 1

        print()
