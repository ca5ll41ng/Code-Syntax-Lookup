---
id: "java-en-function-resultset-updatearray"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.updateArray"
signature: "void updateArray(int columnIndex, java.sql.Array x) throws SQLException"
title: "ResultSet.updateArray"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.updateArray

```java
void updateArray(int columnIndex, java.sql.Array x) throws SQLException
```

Updates the designated column with a `java.sql.Array` value.
 The updater methods are used to update column values in the
 current row or the insert row.  The updater methods do not
 update the underlying database; instead the `updateRow` or
 `insertRow` methods are called to update the database.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **x** — the new column value

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs; the result set concurrency is `CONCUR_READ_ONLY` or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
