-- a script that displays the top 3 of cities temperature 
-- during July and August ordered by temperature (descending)

SELECT city, AVG(value) As avg_temp
FROM temperatures
WHERE MONTH  IN (7, 8)
GROUP BY city
ORDER BY 2 DESC
LIMIT 3;
