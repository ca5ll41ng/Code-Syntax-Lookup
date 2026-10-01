---
id: "java-en-function-pooledconnection-getconnection"
language: "java"
lang: "en"
category: "function"
name: "PooledConnection.getConnection"
signature: "Connection getConnection() throws SQLException"
title: "PooledConnection.getConnection"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/PooledConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PooledConnection.getConnection

```java
Connection getConnection() throws SQLException
```

Creates and returns a `Connection` object that is a handle
 for the physical connection that
 this `PooledConnection` object represents.
 The connection pool manager calls this method when an application has
 called the method `DataSource.getConnection` and there are
 no `PooledConnection` objects available. See the
 `PooledConnection interface description` for more information.

**返回**

- a `Connection` object that is a handle to this `PooledConnection` object

**异常**

- **SQLException** — if a database access error occurs
- **java.sql.SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
