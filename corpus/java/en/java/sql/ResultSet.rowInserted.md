---
id: "java-en-function-resultset-rowinserted"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.rowInserted"
signature: "boolean rowInserted() throws SQLException"
title: "ResultSet.rowInserted"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.rowInserted

```java
boolean rowInserted() throws SQLException
```

Retrieves whether the current row has had an insertion.
 The value returned depends on whether or not this
 `ResultSet` object can detect visible inserts.
 

 **Note:** Support for the `rowInserted` method is optional with a result set
 concurrency of `CONCUR_READ_ONLY`

**返回**

- `true` if the current row is detected to have been inserted; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- DatabaseMetaData#insertsAreDetected

> *Since 1.2*
