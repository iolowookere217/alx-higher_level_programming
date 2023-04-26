#!/usr/bin/node

// a function that converts a number from base 10 to another base passed as argument

export.converter = function(base){
        return function(n){
                return (n.toString(base));
        };
};
