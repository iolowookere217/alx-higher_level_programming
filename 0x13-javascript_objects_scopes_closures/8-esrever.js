#!/usr/bin/node

// a function that returns the reversed version of a list

exports.reverse = function (list) {
        return list.reduceRight(function(array, current){
                array.push(current);
                return array;
        }, [);
};
