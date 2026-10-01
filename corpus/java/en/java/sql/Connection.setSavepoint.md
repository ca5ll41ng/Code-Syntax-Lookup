---
id: "java-en-function-connection-setsavepoint"
language: "java"
lang: "en"
category: "function"
name: "Connection.setSavepoint"
signature: "Savepoint setSavepoint() throws SQLException"
title: "Connection.setSavepoint"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setSavepoint

```java
Savepoint setSavepoint() throws SQLException
```

Creates an unnamed savepoint in the current transaction and
 returns the new `Savepoint` object that represents it.

 if setSavepoint is invoked outside of an active transaction, a transaction will be started at this newly created
savepoint.

**返回**

- the new `Savepoint` object

**异常**

- **SQLException** — if a database access error occurs, this method is called while participating in a distributed transaction, this method is called on a closed connection or this `Connection` object is currently in auto-commit mode
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

**参见**

- Savepoint

> *Since 1.4*
