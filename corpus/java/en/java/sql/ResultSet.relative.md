---
id: "java-en-function-resultset-relative"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.relative"
signature: "boolean relative( int rows ) throws SQLException"
title: "ResultSet.relative"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.relative

```java
boolean relative( int rows ) throws SQLException
```

Moves the cursor a relative number of rows, either positive or negative.
 Attempting to move beyond the first/last row in the
 result set positions the cursor before/after the
 the first/last row. Calling `relative(0)` is valid, but does
 not change the cursor position.

 

Note: Calling the method `relative(1)`
 is identical to calling the method `next()` and
 calling the method `relative(-1)` is identical
 to calling the method `previous()`.

**参数**

- **rows** — an `int` specifying the number of rows to move from the current row; a positive number moves the cursor forward; a negative number moves the cursor backward

**返回**

- `true` if the cursor is on a row; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs;  this method is called on a closed result set or the result set type is `TYPE_FORWARD_ONLY`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
