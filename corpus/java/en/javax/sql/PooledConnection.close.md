---
id: "java-en-function-pooledconnection-close"
language: "java"
lang: "en"
category: "function"
name: "PooledConnection.close"
signature: "void close() throws SQLException"
title: "PooledConnection.close"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/PooledConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PooledConnection.close

```java
void close() throws SQLException
```

Closes the physical connection that this `PooledConnection`
 object represents.  An application never calls this method directly;
 it is called by the connection pool module, or manager.
 

 See the `PooledConnection interface description` for more
 information.

**异常**

- **SQLException** — if a database access error occurs
- **java.sql.SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
