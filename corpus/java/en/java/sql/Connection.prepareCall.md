---
id: "java-en-function-connection-preparecall"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql-jdbc"],"cwe":["CWE-89"],"params":[0,2,3]}
name: "Connection.prepareCall"
signature: "CallableStatement prepareCall(String sql) throws SQLException"
title: "Connection.prepareCall"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.prepareCall

```java
CallableStatement prepareCall(String sql) throws SQLException
```

Creates a `CallableStatement` object for calling
 database stored procedures.
 The `CallableStatement` object provides
 methods for setting up its IN and OUT parameters, and
 methods for executing the call to a stored procedure.

 

**Note:** This method is optimized for handling stored
 procedure call statements. Some drivers may send the call
 statement to the database when the method `prepareCall`
 is done; others
 may wait until the `CallableStatement` object
 is executed. This has no
 direct effect on users; however, it does affect which method
 throws certain SQLExceptions.
 

 Result sets created using the returned `CallableStatement`
 object will by default be type `TYPE_FORWARD_ONLY`
 and have a concurrency level of `CONCUR_READ_ONLY`.
 The holdability of the created result sets can be determined by
 calling `getHoldability`.

**参数**

- **sql** — an SQL statement that may contain one or more '?' parameter placeholders. Typically this statement is specified using JDBC call escape syntax.

**返回**

- a new default `CallableStatement` object containing the pre-compiled SQL statement

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection
