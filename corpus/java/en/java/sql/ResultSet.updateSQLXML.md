---
id: "java-en-function-resultset-updatesqlxml"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.updateSQLXML"
signature: "void updateSQLXML(int columnIndex, SQLXML xmlObject) throws SQLException"
title: "ResultSet.updateSQLXML"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.updateSQLXML

```java
void updateSQLXML(int columnIndex, SQLXML xmlObject) throws SQLException
```

Updates the designated column with a `java.sql.SQLXML` value.
 The updater
 methods are used to update column values in the current row or the insert
 row. The updater methods do not update the underlying database; instead
 the `updateRow` or `insertRow` methods are called
 to update the database.

**参数**

- **columnIndex** — the first column is 1, the second 2, ...
- **xmlObject** — the value for the column to be updated

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs; this method is called on a closed result set; the `java.xml.transform.Result`, `Writer` or `OutputStream` has not been closed for the `SQLXML` object; if there is an error processing the XML value or the result set concurrency is `CONCUR_READ_ONLY`.  The `getCause` method of the exception may provide a more detailed exception, for example, if the stream does not contain valid XML.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
