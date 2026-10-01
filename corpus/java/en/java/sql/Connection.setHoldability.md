---
id: "java-en-function-connection-setholdability"
language: "java"
lang: "en"
category: "function"
name: "Connection.setHoldability"
signature: "void setHoldability(int holdability) throws SQLException"
title: "Connection.setHoldability"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setHoldability

```java
void setHoldability(int holdability) throws SQLException
```

Changes the default holdability of `ResultSet` objects
 created using this `Connection` object to the given
 holdability.  The default holdability of `ResultSet` objects
 can be determined by invoking
 `getResultSetHoldability`.

**参数**

- **holdability** — a `ResultSet` holdability constant; one of `ResultSet.HOLD_CURSORS_OVER_COMMIT` or `ResultSet.CLOSE_CURSORS_AT_COMMIT`

**异常**

- **SQLException** — if a database access occurs, this method is called on a closed connection, or the given parameter is not a `ResultSet` constant indicating holdability
- **SQLFeatureNotSupportedException** — if the given holdability is not supported

**参见**

- #getHoldability
- DatabaseMetaData#getResultSetHoldability
- ResultSet

> *Since 1.4*
