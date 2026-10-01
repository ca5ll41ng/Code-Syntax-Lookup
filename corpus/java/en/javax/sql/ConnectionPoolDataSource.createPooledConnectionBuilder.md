---
id: "java-en-function-connectionpooldatasource-createpooledconnectionbuilder"
language: "java"
lang: "en"
category: "function"
name: "ConnectionPoolDataSource.createPooledConnectionBuilder"
signature: "default PooledConnectionBuilder createPooledConnectionBuilder() throws SQLException"
title: "ConnectionPoolDataSource.createPooledConnectionBuilder"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/ConnectionPoolDataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConnectionPoolDataSource.createPooledConnectionBuilder

```java
default PooledConnectionBuilder createPooledConnectionBuilder() throws SQLException
```

Creates a new `PooledConnectionBuilder` instance
 The default implementation will throw a `SQLFeatureNotSupportedException`.

**返回**

- The ConnectionBuilder instance that was created

**异常**

- **SQLException** — if an error occurs creating the builder
- **SQLFeatureNotSupportedException** — if the driver does not support sharding

**参见**

- PooledConnectionBuilder

> *Since 9*
