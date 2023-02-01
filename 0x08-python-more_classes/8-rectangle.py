#!/usr/bin/python3

"""
A rectangle with width and height.
"""


class Rectangle:
    """
    Rectangle functions and data
    width (int) = the width of the new rectangle
    height (int) = the height of the new rectangle
    number_of_instances (int): The number of Rectangle instances.
    print_symbol (any): The symbol used for string representation.
    """
    # Public
    number_of_instances = 0
    print_symbol = "#"

    def __init__(self, width=0, height=0):

        """ Instantiation
        """
        type(self).number_of_instances += 1
        self.height = height
        self.width = width

    @property
    def height(self):
        """ Getter for height
        """
        return self.__height

    @height.setter
    def height(self, value):
        """ Setter for height
        """
        if not isinstance(value, int):
            raise TypeError("height must be an integer")
        if value < 0:
            raise ValueError("height must be >= 0")
        self.__height = value

    @property
    def width(self):
        """ Getter for width
        """
        return self.__width

    @width.setter
    def width(self, value):
        """ Setter for width
        """
        if type(value) != int:
            raise TypeError("width must be an integer")
        if value < 0:
            raise ValueError("width must be >= 0")
        self.__width = value

    # Functions

    def area(self):
        """ Returns area of rectangle
        """
        return self.__height * self.__width

    def perimeter(self):
        """ Returns perimeter of rectangle
        """
        if self.__height == 0 or self.__width == 0:
            return 0
        else:
            return 2 * (self.__height + self.__width)

    @staticmethod
    def bigger_or_equal(rect_1, rect_2):

        """Return the Rectangle with the greater area.
        Args:
        rect_1 (Rectangle): The first Rectangle.
        rect_2 (Rectangle): The second Rectangle.
        Raises:
        TypeError: If either of rect_1 or rect_2 is not a Rectangle.
        """
        if not isinstance(rect_1, Rectangle):
            raise TypeError("rect_1 must be an instance of Rectangle")
        if not isinstance(rect_2, Rectangle):
            raise TypeError("rect_2 must be an instance of Rectangle")
        if rect_1.area() >= rect_2.area():
            return (rect_1)
        return (rect_2)

    def __str__(self):

        """ print() __str__ method funtion to return rectangle in char '#'
        """
        res = ""

        rect = []
        if self.__width == 0 or self.__height == 0:
            return res
        for i in range(self.__height):
            if i == self.__height - 1:
                res += ('#' * self.__width)
            else:
                res += (('#' * self.__width) + '\n')
        return res

    def __repr__(self):

        """Return the string representation of the Rectangle."""

        rect = "Rectangle(" + str(self.__width)
        rect += ", " + str(self.__height) + ")"
        return (rect)

    def __del__(self):

        """Print a message for every deletion of a Rectangle."""

        type(self).number_of_instances -= 1
        print("Bye rectangle...")
