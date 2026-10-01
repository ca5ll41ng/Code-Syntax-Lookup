---
id: "java-en-function-datasource-getconnection"
language: "java"
lang: "en"
category: "function"
name: "DataSource.getConnection"
signature: "Connection getConnection() throws SQLException"
title: "DataSource.getConnection"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/DataSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataSource.getConnection

```java
Connection getConnection() throws SQLException
```

Attempts to establish a connection with the data source that
 this `DataSource` object represents.

**返回**

- a connection to the data source

**异常**

- **SQLException** — if a database access error occurs
- **java.sql.SQLTimeoutException** — when the driver has determined that the timeout value specified by the `setLoginTimeout` method has been exceeded and has at least tried to cancel the current database connection attempt
