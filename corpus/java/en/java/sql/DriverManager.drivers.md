---
id: "java-en-function-drivermanager-drivers"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.drivers"
signature: "public static Stream<Driver> drivers()"
title: "DriverManager.drivers"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.drivers

```java
public static Stream<Driver> drivers()
```

Retrieves a Stream with all of the currently loaded JDBC drivers
 to which the current caller has access.

**返回**

- the stream of JDBC Drivers loaded by the caller's class loader

> *Since 9*
