---
id: "java-en-function-resultset-deleterow"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.deleteRow"
signature: "void deleteRow() throws SQLException"
title: "ResultSet.deleteRow"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.deleteRow

```java
void deleteRow() throws SQLException
```

Deletes the current row from this `ResultSet` object
 and from the underlying database.  This method cannot be called when
 the cursor is on the insert row.

**异常**

- **SQLException** — if a database access error occurs; the result set concurrency is `CONCUR_READ_ONLY`; this method is called on a closed result set or if this method is called when the cursor is on the insert row
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
