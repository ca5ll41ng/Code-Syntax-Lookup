---
id: "java-en-function-resultset-updateobject"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.updateObject"
signature: "void updateObject(int columnIndex, Object x, int scaleOrLength) throws SQLException"
title: "ResultSet.updateObject"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.updateObject

```java
void updateObject(int columnIndex, Object x, int scaleOrLength) throws SQLException
```

Updates the designated column with an `Object` value.

 The updater methods are used to update column values in the
 current row or the insert row.  The updater methods do not
 update the underlying database; instead the `updateRow` or
 `insertRow` methods are called to update the database.

 If the second argument is an `InputStream` then the stream must contain
 the number of bytes specified by scaleOrLength.  If the second argument is a
 `Reader` then the reader must contain the number of characters specified
 by scaleOrLength. If these conditions are not true the driver will generate a
 `SQLException` when the statement is executed.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **x** — the new column value
- **scaleOrLength** — for an object of `java.math.BigDecimal` , this is the number of digits after the decimal point. For Java Object types `InputStream` and `Reader`, this is the length of the data in the stream or reader.  For all other types, this value will be ignored.

**异常**

- **SQLException** — if the columnIndex is not valid; if a database access error occurs; the result set concurrency is `CONCUR_READ_ONLY` or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
