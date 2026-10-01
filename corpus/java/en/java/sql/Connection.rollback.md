---
id: "java-en-function-connection-rollback"
language: "java"
lang: "en"
category: "function"
name: "Connection.rollback"
signature: "void rollback() throws SQLException"
title: "Connection.rollback"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.rollback

```java
void rollback() throws SQLException
```

Undoes all changes made in the current transaction
 and releases any database locks currently held
 by this `Connection` object. This method should be
 used only when auto-commit mode has been disabled.

**异常**

- **SQLException** — if a database access error occurs, this method is called while participating in a distributed transaction, this method is called on a closed connection or this `Connection` object is in auto-commit mode

**参见**

- #setAutoCommit
