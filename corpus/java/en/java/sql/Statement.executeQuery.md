---
id: "java-en-function-statement-executequery"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql-jdbc"],"cwe":["CWE-89"],"params":[0]}
name: "Statement.executeQuery"
signature: "ResultSet executeQuery(String sql) throws SQLException"
title: "Statement.executeQuery"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.executeQuery

```java
ResultSet executeQuery(String sql) throws SQLException
```

Executes the given SQL statement, which returns a single
 `ResultSet` object.

 **Note:**This method cannot be called on a
 `PreparedStatement` or `CallableStatement`.

**参数**

- **sql** — an SQL statement to be sent to the database, typically a static SQL `SELECT` statement

**返回**

- a `ResultSet` object that contains the data produced by the given query; never `null`

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed `Statement`, the given SQL statement produces anything other than a single `ResultSet` object, the method is called on a `PreparedStatement` or `CallableStatement`
- **SQLTimeoutException** — when the driver has determined that the timeout value that was specified by the `setQueryTimeout` method has been exceeded and has at least attempted to cancel the currently running `Statement`
