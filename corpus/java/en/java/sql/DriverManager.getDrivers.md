---
id: "java-en-function-drivermanager-getdrivers"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.getDrivers"
signature: "public static Enumeration<Driver> getDrivers()"
title: "DriverManager.getDrivers"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.getDrivers

```java
public static Enumeration<Driver> getDrivers()
```

Retrieves an Enumeration with all of the currently loaded JDBC drivers
 to which the current caller has access.

 

**Note:** The classname of a driver can be found using
 `d.getClass().getName()`

**返回**

- the list of JDBC Drivers loaded by the caller's class loader

**参见**

- #drivers()
