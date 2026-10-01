---
id: "java-en-function-drivermanager-getdriver"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.getDriver"
signature: "public static Driver getDriver(String url) throws SQLException"
title: "DriverManager.getDriver"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.getDriver

```java
public static Driver getDriver(String url) throws SQLException
```

Attempts to locate a driver that understands the given URL.
 The `DriverManager` attempts to select an appropriate driver from
 the set of registered JDBC drivers.

**参数**

- **url** — a database URL of the form jdbc:subprotocol:subname

**返回**

- a `Driver` object representing a driver that can connect to the given URL

**异常**

- **SQLException** — if a database access error occurs
