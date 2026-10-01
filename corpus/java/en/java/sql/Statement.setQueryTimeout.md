---
id: "java-en-function-statement-setquerytimeout"
language: "java"
lang: "en"
category: "function"
name: "Statement.setQueryTimeout"
signature: "void setQueryTimeout(int seconds) throws SQLException"
title: "Statement.setQueryTimeout"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.setQueryTimeout

```java
void setQueryTimeout(int seconds) throws SQLException
```

Sets the number of seconds the driver will wait for a
 `Statement` object to execute to the given number of seconds.
By default there is no limit on the amount of time allowed for a running
 statement to complete. If the limit is exceeded, an
 `SQLTimeoutException` is thrown.
 A JDBC driver must apply this limit to the `execute`,
 `executeQuery` and `executeUpdate` methods.
 

 **Note:** JDBC driver implementations may also apply this
 limit to `ResultSet` methods
 (consult your driver vendor documentation for details).
 

 **Note:** In the case of `Statement` batching, it is
 implementation defined as to whether the time-out is applied to
 individual SQL commands added via the `addBatch` method or to
 the entire batch of SQL commands invoked by the `executeBatch`
 method (consult your driver vendor documentation for details).

**参数**

- **seconds** — the new query timeout limit in seconds; zero means there is no limit

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed `Statement` or the condition `seconds >= 0` is not satisfied

**参见**

- #getQueryTimeout
