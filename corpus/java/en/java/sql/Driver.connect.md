---
id: "java-en-function-driver-connect"
language: "java"
lang: "en"
category: "function"
name: "Driver.connect"
signature: "Connection connect(String url, java.util.Properties info) throws SQLException"
title: "Driver.connect"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Driver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Driver.connect

```java
Connection connect(String url, java.util.Properties info) throws SQLException
```

Attempts to make a database connection to the given URL.
 The driver should return "null" if it realizes it is the wrong kind
 of driver to connect to the given URL.  This will be common, as when
 the JDBC driver manager is asked to connect to a given URL it passes
 the URL to each loaded driver in turn.

 

The driver should throw an `SQLException` if it is the right
 driver to connect to the given URL but has trouble connecting to
 the database.

 

The `Properties` argument can be used to pass
 arbitrary string tag/value pairs as connection arguments.
 Normally at least "user" and "password" properties should be
 included in the `Properties` object.
 

 **Note:** If a property is specified as part of the `url` and
 is also specified in the `Properties` object, it is
 implementation-defined as to which value will take precedence. For
 maximum portability, an application should only specify a property once.

**参数**

- **url** — the URL of the database to which to connect
- **info** — a list of arbitrary string tag/value pairs as connection arguments. Normally at least a "user" and "password" property should be included.

**返回**

- a `Connection` object that represents a connection to the URL

**异常**

- **SQLException** — if a database access error occurs or the url is `null`
