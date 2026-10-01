---
id: "java-en-function-connection-getholdability"
language: "java"
lang: "en"
category: "function"
name: "Connection.getHoldability"
signature: "int getHoldability() throws SQLException"
title: "Connection.getHoldability"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.getHoldability

```java
int getHoldability() throws SQLException
```

Retrieves the current holdability of `ResultSet` objects
 created using this `Connection` object.

**返回**

- the holdability, one of `ResultSet.HOLD_CURSORS_OVER_COMMIT` or `ResultSet.CLOSE_CURSORS_AT_COMMIT`

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection

**参见**

- #setHoldability
- DatabaseMetaData#getResultSetHoldability
- ResultSet

> *Since 1.4*
