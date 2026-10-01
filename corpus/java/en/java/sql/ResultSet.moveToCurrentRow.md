---
id: "java-en-function-resultset-movetocurrentrow"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.moveToCurrentRow"
signature: "void moveToCurrentRow() throws SQLException"
title: "ResultSet.moveToCurrentRow"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.moveToCurrentRow

```java
void moveToCurrentRow() throws SQLException
```

Moves the cursor to the remembered cursor position, usually the
 current row.  This method has no effect if the cursor is not on
 the insert row.

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed result set or the result set concurrency is `CONCUR_READ_ONLY`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
