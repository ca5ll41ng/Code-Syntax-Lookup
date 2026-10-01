---
id: "java-en-function-connection-getautocommit"
language: "java"
lang: "en"
category: "function"
name: "Connection.getAutoCommit"
signature: "boolean getAutoCommit() throws SQLException"
title: "Connection.getAutoCommit"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.getAutoCommit

```java
boolean getAutoCommit() throws SQLException
```

Retrieves the current auto-commit mode for this `Connection`
 object.

**返回**

- the current state of this `Connection` object's auto-commit mode

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection

**参见**

- #setAutoCommit
