---
id: "java-en-function-resultset-updatenclob"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.updateNClob"
signature: "void updateNClob(int columnIndex, NClob nClob) throws SQLException"
title: "ResultSet.updateNClob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.updateNClob

```java
void updateNClob(int columnIndex, NClob nClob) throws SQLException
```

Updates the designated column with a `java.sql.NClob` value.
 The updater methods are used to update column values in the
 current row or the insert row.  The updater methods do not
 update the underlying database; instead the `updateRow` or
 `insertRow` methods are called to update the database.

**参数**

- **columnIndex** — the first column is 1, the second 2, ...
- **nClob** — the value for the column to be updated

**异常**

- **SQLException** — if the columnIndex is not valid; if the driver does not support national character sets;  if the driver can detect that a data conversion error could occur; this method is called on a closed result set; if a database access error occurs or the result set concurrency is `CONCUR_READ_ONLY`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
