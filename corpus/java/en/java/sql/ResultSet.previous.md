---
id: "java-en-function-resultset-previous"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.previous"
signature: "boolean previous() throws SQLException"
title: "ResultSet.previous"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.previous

```java
boolean previous() throws SQLException
```

Moves the cursor to the previous row in this
 `ResultSet` object.

 When a call to the `previous` method returns `false`,
 the cursor is positioned before the first row.  Any invocation of a
 `ResultSet` method which requires a current row will result in a
 `SQLException` being thrown.

 If an input stream is open for the current row, a call to the method
 `previous` will implicitly close it.  A `ResultSet`
  object's warning change is cleared when a new row is read.

**返回**

- `true` if the cursor is now positioned on a valid row; `false` if the cursor is positioned before the first row

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set or the result set type is `TYPE_FORWARD_ONLY`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
