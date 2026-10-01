---
id: "java-en-function-connection-createstatement"
language: "java"
lang: "en"
category: "function"
name: "Connection.createStatement"
signature: "Statement createStatement() throws SQLException"
title: "Connection.createStatement"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.createStatement

```java
Statement createStatement() throws SQLException
```

Creates a `Statement` object for sending
 SQL statements to the database.
 SQL statements without parameters are normally
 executed using `Statement` objects. If the same SQL statement
 is executed many times, it may be more efficient to use a
 `PreparedStatement` object.
 

 Result sets created using the returned `Statement`
 object will by default be type `TYPE_FORWARD_ONLY`
 and have a concurrency level of `CONCUR_READ_ONLY`.
 The holdability of the created result sets can be determined by
 calling `getHoldability`.

**返回**

- a new default `Statement` object

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection
