#!/usr/bin/python3
"""a Python script that takes in a URL and an email,
    sends a POST request to the passed URL with
    the email as a parameter,and displays the body of the
    response (decoded in utf-8) ascii is equivalent to utf8"""

import sys
import urllib.parse as parse
import urllib.request as request


if __name__ == '__main__':
    if len(sys.argv) > 1:
        url = sys.argv[1]
        values = {'email': sys.argv[2]}

        data = parse.urlencode(values)
        data = data.encode('ascii')
        req = request.Request(url, data)

        with request.urlopen(req) as response:
            the_page = response.read()
            print(the_page.decode("utf-8"))
