#!/usr/bin/node
// clss Rectangle that defines a rectangle that takes two argument w and h

class Rectangle {
        constructor (w, h) {
                if (w > 0 && h > 0){
                        this.width = w;
                        this.height = h;
                }
        }
}

module.exports = Rectangle;
