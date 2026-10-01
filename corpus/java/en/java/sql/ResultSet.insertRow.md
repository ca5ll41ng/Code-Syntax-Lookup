---
id: "java-en-function-resultset-insertrow"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.insertRow"
signature: "void insertRow() throws SQLException"
title: "ResultSet.insertRow"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.insertRow

```java
void insertRow() throws SQLException
```

Inserts the contents of the insert row into this
 `ResultSet` object and into the database.
 The cursor must be on the insert row when this method is called.

**异常**

- **SQLException** — if a database access error occurs; the result set concurrency is `CONCUR_READ_ONLY`, this method is called on a closed result set, if this method is called when the cursor is not on the insert row, or if not all of non-nullable columns in the insert row have been given a non-null value
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
