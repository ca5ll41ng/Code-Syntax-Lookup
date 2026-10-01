---
id: "java-en-function-connectionpooldatasource-getpooledconnection"
language: "java"
lang: "en"
category: "function"
name: "ConnectionPoolDataSource.getPooledConnection"
signature: "PooledConnection getPooledConnection() throws SQLException"
title: "ConnectionPoolDataSource.getPooledConnection"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/ConnectionPoolDataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConnectionPoolDataSource.getPooledConnection

```java
PooledConnection getPooledConnection() throws SQLException
```

Attempts to establish a physical database connection that can
 be used as a pooled connection.

**返回**

- a `PooledConnection` object that is a physical connection to the database that this `ConnectionPoolDataSource` object represents

**异常**

- **SQLException** — if a database access error occurs
- **java.sql.SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
