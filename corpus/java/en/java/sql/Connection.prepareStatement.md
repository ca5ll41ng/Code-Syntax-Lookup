---
id: "java-en-function-connection-preparestatement"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql-jdbc"],"cwe":["CWE-89"],"params":[0,1,2,3]}
name: "Connection.prepareStatement"
signature: "PreparedStatement prepareStatement(String sql) throws SQLException"
title: "Connection.prepareStatement"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.prepareStatement

```java
PreparedStatement prepareStatement(String sql) throws SQLException
```

Creates a `PreparedStatement` object for sending
 parameterized SQL statements to the database.
 

 A SQL statement with or without IN parameters can be
 pre-compiled and stored in a `PreparedStatement` object. This
 object can then be used to efficiently execute this statement
 multiple times.

 

**Note:** This method is optimized for handling
 parametric SQL statements that benefit from precompilation. If
 the driver supports precompilation,
 the method `prepareStatement` will send
 the statement to the database for precompilation. Some drivers
 may not support precompilation. In this case, the statement may
 not be sent to the database until the `PreparedStatement`
 object is executed.  This has no direct effect on users; however, it does
 affect which methods throw certain `SQLException` objects.
 

 Result sets created using the returned `PreparedStatement`
 object will by default be type `TYPE_FORWARD_ONLY`
 and have a concurrency level of `CONCUR_READ_ONLY`.
 The holdability of the created result sets can be determined by
 calling `getHoldability`.

**参数**

- **sql** — an SQL statement that may contain one or more '?' IN parameter placeholders

**返回**

- a new default `PreparedStatement` object containing the pre-compiled SQL statement

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection
