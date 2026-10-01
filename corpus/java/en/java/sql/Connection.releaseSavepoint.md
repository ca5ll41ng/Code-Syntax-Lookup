---
id: "java-en-function-connection-releasesavepoint"
language: "java"
lang: "en"
category: "function"
name: "Connection.releaseSavepoint"
signature: "void releaseSavepoint(Savepoint savepoint) throws SQLException"
title: "Connection.releaseSavepoint"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.releaseSavepoint

```java
void releaseSavepoint(Savepoint savepoint) throws SQLException
```

Removes the specified `Savepoint`  and subsequent `Savepoint` objects from the current
 transaction. Any reference to the savepoint after it have been removed
 will cause an `SQLException` to be thrown.

**参数**

- **savepoint** — the `Savepoint` object to be removed

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed connection or the given `Savepoint` object is not a valid savepoint in the current transaction
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
