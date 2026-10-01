---
id: "java-en-function-connection-commit"
language: "java"
lang: "en"
category: "function"
name: "Connection.commit"
signature: "void commit() throws SQLException"
title: "Connection.commit"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.commit

```java
void commit() throws SQLException
```

Makes all changes made since the previous
 commit/rollback permanent and releases any database locks
 currently held by this `Connection` object.
 This method should be
 used only when auto-commit mode has been disabled.

**异常**

- **SQLException** — if a database access error occurs, this method is called while participating in a distributed transaction, if this method is called on a closed connection or this `Connection` object is in auto-commit mode

**参见**

- #setAutoCommit
