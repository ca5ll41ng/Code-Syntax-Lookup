---
id: "java-en-function-preparedstatement-execute"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql-jdbc"],"cwe":["CWE-89"],"params":[0,1]}
name: "PreparedStatement.execute"
signature: "boolean execute() throws SQLException"
title: "PreparedStatement.execute"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.execute

```java
boolean execute() throws SQLException
```

Executes the SQL statement in this `PreparedStatement` object,
 which may be any kind of SQL statement.
 Some prepared statements return multiple results; the `execute`
 method handles these complex statements as well as the simpler
 form of statements handled by the methods `executeQuery`
 and `executeUpdate`.
 

 The `execute` method returns a `boolean` to
 indicate the form of the first result.  You must call either the method
 `getResultSet` or `getUpdateCount`
 to retrieve the result; you must call `getMoreResults` to
 move to any subsequent result(s).

**返回**

- `true` if the first result is a `ResultSet` object; `false` if the first result is an update count or there is no result

**异常**

- **SQLException** — if a database access error occurs; this method is called on a closed `PreparedStatement` or an argument is supplied to this method
- **SQLTimeoutException** — when the driver has determined that the timeout value that was specified by the `setQueryTimeout` method has been exceeded and has at least attempted to cancel the currently running `Statement`

**参见**

- Statement#execute
- Statement#getResultSet
- Statement#getUpdateCount
- Statement#getMoreResults
