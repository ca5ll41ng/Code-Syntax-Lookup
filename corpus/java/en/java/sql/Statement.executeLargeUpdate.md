---
id: "java-en-function-statement-executelargeupdate"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql-jdbc"],"cwe":["CWE-89"],"params":[0,1]}
name: "Statement.executeLargeUpdate"
signature: "default long executeLargeUpdate(String sql) throws SQLException"
title: "Statement.executeLargeUpdate"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.executeLargeUpdate

```java
default long executeLargeUpdate(String sql) throws SQLException
```

Executes the given SQL statement, which may be an `INSERT`,
 `UPDATE`, or `DELETE` statement or an
 SQL statement that returns nothing, such as an SQL DDL statement.
 

 This method should be used when the returned row count may exceed
 `MAX_VALUE`.
 

 **Note:**This method cannot be called on a
 `PreparedStatement` or `CallableStatement`.

 The default implementation will throw `UnsupportedOperationException`

**参数**

- **sql** — an SQL Data Manipulation Language (DML) statement, such as `INSERT`, `UPDATE` or `DELETE`; or an SQL statement that returns nothing, such as a DDL statement.

**返回**

- either (1) the row count for SQL Data Manipulation Language (DML) statements or (2) 0 for SQL statements that return nothing

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed `Statement`, the given SQL statement produces a `ResultSet` object, the method is called on a `PreparedStatement` or `CallableStatement`
- **SQLTimeoutException** — when the driver has determined that the timeout value that was specified by the `setQueryTimeout` method has been exceeded and has at least attempted to cancel the currently running `Statement`

> *Since 1.8*
