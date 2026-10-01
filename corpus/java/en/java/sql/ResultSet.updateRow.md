---
id: "java-en-function-resultset-updaterow"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.updateRow"
signature: "void updateRow() throws SQLException"
title: "ResultSet.updateRow"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.updateRow

```java
void updateRow() throws SQLException
```

Updates the underlying database with the new contents of the
 current row of this `ResultSet` object.
 This method cannot be called when the cursor is on the insert row.

**异常**

- **SQLException** — if a database access error occurs; the result set concurrency is `CONCUR_READ_ONLY`; this method is called on a closed result set or if this method is called when the cursor is on the insert row
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
