---
id: "java-en-function-array-getresultset"
language: "java"
lang: "en"
category: "function"
name: "Array.getResultSet"
signature: "ResultSet getResultSet () throws SQLException"
title: "Array.getResultSet"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.getResultSet

```java
ResultSet getResultSet () throws SQLException
```

Retrieves a result set that contains the elements of the SQL
 `ARRAY` value
 designated by this `Array` object.  If appropriate,
 the elements of the array are mapped using the connection's type
 map; otherwise, the standard mapping is used.
 

 The result set contains one row for each array element, with
 two columns in each row.  The second column stores the element
 value; the first column stores the index into the array for
 that element (with the first array element being at index 1).
 The rows are in ascending order corresponding to
 the order of the indices.

**返回**

- a `ResultSet` object containing one row for each of the elements in the array designated by this `Array` object, with the rows in ascending order based on the indices.

**异常**

- **SQLException** — if an error occurs while attempting to access the array
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
