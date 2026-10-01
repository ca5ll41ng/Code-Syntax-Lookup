---
id: "java-en-function-statement-execute"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql-jdbc"],"cwe":["CWE-89"],"params":[0,1]}
name: "Statement.execute"
signature: "boolean execute(String sql) throws SQLException"
title: "Statement.execute"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.execute

```java
boolean execute(String sql) throws SQLException
```

Executes the given SQL statement, which may return multiple results.
 In some (uncommon) situations, a single SQL statement may return
 multiple result sets and/or update counts.  Normally you can ignore
 this unless you are (1) executing a stored procedure that you know may
 return multiple results or (2) you are dynamically executing an
 unknown SQL string.
 

 The `execute` method executes an SQL statement and indicates the
 form of the first result.  You must then use the methods
 `getResultSet` or `getUpdateCount`
 to retrieve the result, and `getMoreResults` to
 move to any subsequent result(s).
 

**Note:**This method cannot be called on a
 `PreparedStatement` or `CallableStatement`.

**参数**

- **sql** — any SQL statement

**返回**

- `true` if the first result is a `ResultSet` object; `false` if it is an update count or there are no results

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed `Statement`, the method is called on a `PreparedStatement` or `CallableStatement`
- **SQLTimeoutException** — when the driver has determined that the timeout value that was specified by the `setQueryTimeout` method has been exceeded and has at least attempted to cancel the currently running `Statement`

**参见**

- #getResultSet
- #getUpdateCount
- #getMoreResults
