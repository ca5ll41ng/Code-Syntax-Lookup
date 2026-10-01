---
id: "java-en-function-connection-setautocommit"
language: "java"
lang: "en"
category: "function"
name: "Connection.setAutoCommit"
signature: "void setAutoCommit(boolean autoCommit) throws SQLException"
title: "Connection.setAutoCommit"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setAutoCommit

```java
void setAutoCommit(boolean autoCommit) throws SQLException
```

Sets this connection's auto-commit mode to the given state.
 If a connection is in auto-commit mode, then all its SQL
 statements will be executed and committed as individual
 transactions.  Otherwise, its SQL statements are grouped into
 transactions that are terminated by a call to either
 the method `commit` or the method `rollback`.
 By default, new connections are in auto-commit
 mode.
 

 The commit occurs when the statement completes. The time when the statement
 completes depends on the type of SQL Statement:
 
 
- For DML statements, such as Insert, Update or Delete, and DDL statements,
 the statement is complete as soon as it has finished executing.
 
- For Select statements, the statement is complete when the associated result
 set is closed.
 
- For `CallableStatement` objects or for statements that return
 multiple results, the statement is complete
 when all of the associated result sets have been closed, and all update
 counts and output parameters have been retrieved.

 

 **NOTE:**  If this method is called during a transaction and the
 auto-commit mode is changed, the transaction is committed.  If
 `setAutoCommit` is called and the auto-commit mode is
 not changed, the call is a no-op.

**参数**

- **autoCommit** — `true` to enable auto-commit mode; `false` to disable it

**异常**

- **SQLException** — if a database access error occurs, setAutoCommit(true) is called while participating in a distributed transaction, or this method is called on a closed connection

**参见**

- #getAutoCommit
