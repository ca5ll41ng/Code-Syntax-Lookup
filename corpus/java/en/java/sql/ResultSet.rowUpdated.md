---
id: "java-en-function-resultset-rowupdated"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.rowUpdated"
signature: "boolean rowUpdated() throws SQLException"
title: "ResultSet.rowUpdated"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.rowUpdated

```java
boolean rowUpdated() throws SQLException
```

Retrieves whether the current row has been updated.  The value returned
 depends on whether or not the result set can detect updates.
 

 **Note:** Support for the `rowUpdated` method is optional with a result set
 concurrency of `CONCUR_READ_ONLY`

**返回**

- `true` if the current row is detected to have been visibly updated by the owner or another; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- DatabaseMetaData#updatesAreDetected

> *Since 1.2*
