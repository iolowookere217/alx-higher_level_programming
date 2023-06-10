#!/bin/bash
# a Bash script that takes in a URL, sends a POST request to the passed URL, and displays the body of the response (subject and email)
curl -sd "email:test@gmail.com" & "subject: I will always be here for PLD" "$1"
