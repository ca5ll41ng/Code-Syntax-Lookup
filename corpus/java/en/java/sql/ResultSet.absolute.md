---
id: "java-en-function-resultset-absolute"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.absolute"
signature: "boolean absolute( int row ) throws SQLException"
title: "ResultSet.absolute"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.absolute

```java
boolean absolute( int row ) throws SQLException
```

Moves the cursor to the given row number in
 this `ResultSet` object.

 

If the row number is positive, the cursor moves to
 the given row number with respect to the
 beginning of the result set.  The first row is row 1, the second
 is row 2, and so on.

 

If the given row number is negative, the cursor moves to
 an absolute row position with respect to
 the end of the result set.  For example, calling the method
 `absolute(-1)` positions the
 cursor on the last row; calling the method `absolute(-2)`
 moves the cursor to the next-to-last row, and so on.

 

If the row number specified is zero, the cursor is moved to
 before the first row.

 

An attempt to position the cursor beyond the first/last row in
 the result set leaves the cursor before the first row or after
 the last row.

 

**Note:** Calling `absolute(1)` is the same
 as calling `first()`. Calling `absolute(-1)`
 is the same as calling `last()`.

**参数**

- **row** — the number of the row to which the cursor should move. A value of zero indicates that the cursor will be positioned before the first row; a positive number indicates the row number counting from the beginning of the result set; a negative number indicates the row number counting from the end of the result set

**返回**

- `true` if the cursor is moved to a position in this `ResultSet` object; `false` if the cursor is before the first row or after the last row

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set or the result set type is `TYPE_FORWARD_ONLY`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
