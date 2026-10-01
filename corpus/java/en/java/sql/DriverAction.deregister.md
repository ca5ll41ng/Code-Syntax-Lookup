---
id: "java-en-function-driveraction-deregister"
language: "java"
lang: "en"
category: "function"
name: "DriverAction.deregister"
signature: "void deregister()"
title: "DriverAction.deregister"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverAction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverAction.deregister

```java
void deregister()
```

Method called by
 `deregisterDriver(Driver)`
  to notify the JDBC driver that it was de-registered.
 

 The `deregister` method is intended only to be used by JDBC Drivers
 and not by applications.  JDBC drivers are recommended to not implement
 `DriverAction` in a public class.  If there are active
 connections to the database at the time that the `deregister`
 method is called, it is implementation specific as to whether the
 connections are closed or allowed to continue. Once this method is
 called, it is implementation specific as to whether the driver may
 limit the ability to create new connections to the database, invoke
 other `Driver` methods or throw a `SQLException`.
 Consult your JDBC driver's documentation for additional information
 on its behavior.

**参见**

- DriverManager#registerDriver(java.sql.Driver, java.sql.DriverAction)
- DriverManager#deregisterDriver(Driver)

> *Since 1.8*
