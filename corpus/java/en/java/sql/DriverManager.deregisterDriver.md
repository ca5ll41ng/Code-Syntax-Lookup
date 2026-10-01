---
id: "java-en-function-drivermanager-deregisterdriver"
language: "java"
lang: "en"
category: "function"
name: "DriverManager.deregisterDriver"
signature: "public static void deregisterDriver(Driver driver) throws SQLException"
title: "DriverManager.deregisterDriver"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager.deregisterDriver

```java
public static void deregisterDriver(Driver driver) throws SQLException
```

Removes the specified driver from the `DriverManager`'s list of
 registered drivers.
 

 If a `null` value is specified for the driver to be removed, then no
 action is taken.
 

 If the specified driver is not found in the list of registered drivers,
 then no action is taken.  If the driver was found, it will be removed
 from the list of registered drivers.
 

 If a `DriverAction` instance was specified when the JDBC driver was
 registered, its deregister method will be called
 prior to the driver being removed from the list of registered drivers.

**参数**

- **driver** — the JDBC Driver to remove

**异常**

- **SQLException** — if a database access error occurs
