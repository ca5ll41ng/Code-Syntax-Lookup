---
id: "java-en-function-drivermanager-registerdriver"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.registerDriver"
signature: "public static void registerDriver(java.sql.Driver driver) throws SQLException"
title: "DriverManager.registerDriver"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.registerDriver

```java
public static void registerDriver(java.sql.Driver driver) throws SQLException
```

Registers the given driver with the `DriverManager`.
 A newly-loaded driver class should call
 the method `registerDriver` to make itself
 known to the `DriverManager`. If the driver is currently
 registered, no action is taken.

**参数**

- **driver** — the new JDBC Driver that is to be registered with the `DriverManager`

**异常**

- **SQLException** — if a database access error occurs
- **NullPointerException** — if `driver` is null
