---
id: "java-en-function-driver-getpropertyinfo"
language: "java"
lang: "en"
category: "function"
name: "Driver.getPropertyInfo"
signature: "DriverPropertyInfo[] getPropertyInfo(String url, java.util.Properties info) throws SQLException"
title: "Driver.getPropertyInfo"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Driver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Driver.getPropertyInfo

```java
DriverPropertyInfo[] getPropertyInfo(String url, java.util.Properties info) throws SQLException
```

Gets information about the possible properties for this driver.
 

 The `getPropertyInfo` method is intended to allow a generic
 GUI tool to discover what properties it should prompt
 a human for in order to get
 enough information to connect to a database.  Note that depending on
 the values the human has supplied so far, additional values may become
 necessary, so it may be necessary to iterate though several calls
 to the `getPropertyInfo` method.

**参数**

- **url** — the URL of the database to which to connect
- **info** — a proposed list of tag/value pairs that will be sent on connect open

**返回**

- an array of `DriverPropertyInfo` objects describing possible properties.  This array may be an empty array if no properties are required.

**异常**

- **SQLException** — if a database access error occurs
