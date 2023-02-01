#!/usr/bin/python3

"""
A rectangle with width and height.
"""


class Rectangle:
    """
    Rectangle functions and data
    width (int) = the width of the new rectangle
    height (int) = the height of the new rectangle
    """

    def __init__(self, width=0, height=0):

        """ Instantiation
        """
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
