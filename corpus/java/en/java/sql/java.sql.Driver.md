---
id: "java-en-function-java-sql-driver"
language: "java"
lang: "en"
category: "function"
name: "java.sql.Driver"
title: "Driver"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Driver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Driver

The interface that every driver class must implement.
 

The Java SQL framework allows for multiple database drivers.

 

Each driver should supply a class that implements
 the Driver interface.

 

The DriverManager will try to load as many drivers as it can
 find and then for any given connection request, it will ask each
 driver in turn to try to connect to the target URL.

 

It is strongly recommended that each Driver class should be
 small and standalone so that the Driver class can be loaded and
 queried without bringing in vast quantities of supporting code.

 

When a Driver class is loaded, it should create an instance of
 itself and register it with the DriverManager. This means that a
 user can load and register a driver by calling:
 

 `Class.forName("foo.bah.Driver")`
 

 A JDBC driver may create a `DriverAction` implementation in order
 to receive notifications when `deregisterDriver` has
 been called.

**参见**

- DriverManager
- Connection
- DriverAction

> *Since 1.1*
