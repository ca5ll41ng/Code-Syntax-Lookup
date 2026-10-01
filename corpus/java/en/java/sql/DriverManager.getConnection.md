---
id: "java-en-function-drivermanager-getconnection"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.getConnection"
signature: "public static Connection getConnection(String url, java.util.Properties info) throws SQLException"
title: "DriverManager.getConnection"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.getConnection

```java
public static Connection getConnection(String url, java.util.Properties info) throws SQLException
```

Attempts to establish a connection to the given database URL.
 The `DriverManager` attempts to select an appropriate driver from
 the set of registered JDBC drivers.

 **Note:** If a property is specified as part of the `url` and
 is also specified in the `Properties` object, it is
 implementation-defined as to which value will take precedence.
 For maximum portability, an application should only specify a
 property once.

**参数**

- **url** — a database url of the form jdbc:subprotocol:subname
- **info** — a list of arbitrary string tag/value pairs as connection arguments; normally at least a "user" and "password" property should be included

**返回**

- a Connection to the URL

**异常**

- **SQLException** — if a database access error occurs or the url is `null`
- **SQLTimeoutException** — when the driver has determined that the timeout value specified by the `setLoginTimeout` method has been exceeded and has at least tried to cancel the current database connection attempt
