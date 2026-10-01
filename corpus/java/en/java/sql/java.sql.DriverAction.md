---
id: "java-en-function-java-sql-driveraction"
language: "java"
lang: "en"
category: "function"
name: "java.sql.DriverAction"
title: "DriverAction"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverAction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverAction

An interface that must be implemented when a `Driver` wants to be
 notified by `DriverManager`.

 A `DriverAction` implementation is not intended to be used
 directly by applications. A JDBC Driver  may choose
 to create its `DriverAction` implementation in a private class
 to avoid it being called directly.
 

 The JDBC driver's static initialization block must call
 `registerDriver(java.sql.Driver, java.sql.DriverAction)` in order
 to inform `DriverManager` which `DriverAction` implementation to
 call when the JDBC driver is de-registered.

> *Since 1.8*
