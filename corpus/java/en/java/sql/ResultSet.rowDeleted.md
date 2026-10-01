---
id: "java-en-function-resultset-rowdeleted"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.rowDeleted"
signature: "boolean rowDeleted() throws SQLException"
title: "ResultSet.rowDeleted"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.rowDeleted

```java
boolean rowDeleted() throws SQLException
```

Retrieves whether a row has been deleted.  A deleted row may leave
 a visible "hole" in a result set.  This method can be used to
 detect holes in a result set.  The value returned depends on whether
 or not this `ResultSet` object can detect deletions.
 

 **Note:** Support for the `rowDeleted` method is optional with a result set
 concurrency of `CONCUR_READ_ONLY`

**返回**

- `true` if the current row is detected to have been deleted by the owner or another; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- DatabaseMetaData#deletesAreDetected

> *Since 1.2*
