---
id: "java-en-function-xadatasource-getxaconnection"
language: "java"
lang: "en"
category: "function"
name: "XADataSource.getXAConnection"
signature: "XAConnection getXAConnection() throws SQLException"
title: "XADataSource.getXAConnection"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/XADataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XADataSource.getXAConnection

```java
XAConnection getXAConnection() throws SQLException
```

Attempts to establish a physical database connection that can be
 used in a distributed transaction.

**返回**

- an `XAConnection` object, which represents a physical connection to a data source, that can be used in a distributed transaction

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method
- **SQLTimeoutException** — when the driver has determined that the timeout value specified by the `setLoginTimeout` method has been exceeded and has at least tried to cancel the current database connection attempt

> *Since 1.4*
