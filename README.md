# Unexpected Errors with $toDouble in $expr Queries

This repository demonstrates an issue with MongoDB queries that use the `$toDouble` operator within the `$expr` operator.  When the field being converted to a double is missing or isn't a valid number, unexpected errors occur. 
The `bug.js` file shows a sample MongoDB query that causes this error. The `bugSolution.js` offers a solution to gracefully handle these cases.