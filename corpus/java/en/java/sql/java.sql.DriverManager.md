---
id: "java-en-function-java-sql-drivermanager"
language: "java"
lang: "en"
category: "function"
name: "java.sql.DriverManager"
title: "DriverManager"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DriverManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DriverManager

The basic service for managing a set of JDBC drivers.
 

 **NOTE:** The `javax.sql.DataSource` interface, provides
 another way to connect to a data source.
 The use of a `DataSource` object is the preferred means of
 connecting to a data source.
 

 As part of its initialization, the `DriverManager` class will
 attempt to load available JDBC drivers by using:
 
 
- The {@systemProperty jdbc.drivers} system property which contains a
 colon separated list of fully qualified class names of JDBC drivers. Each
 driver is loaded using the `getSystemClassLoader
 system class loader`:
 
 
- `jdbc.drivers=foo.bah.Driver:wombat.sql.Driver:bad.taste.ourDriver`
 

 
- Service providers of the `java.sql.Driver` class, that are loaded
 via the `load(Class) service-provider loading` mechanism.

 `DriverManager` initialization is done lazily and looks up service
 providers using the thread context class loader.  The drivers loaded and
 available to an application will depend on the thread context class loader of
 the thread that triggers driver initialization by `DriverManager`.

 

When the method `getConnection` is called,
 the `DriverManager` will attempt to
 locate a suitable driver from amongst those loaded at
 initialization and those loaded explicitly using the same class loader
 as the current application.

**参见**

- Driver
- Connection

> *Since 1.1*
