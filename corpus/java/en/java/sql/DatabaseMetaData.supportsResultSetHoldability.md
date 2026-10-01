---
id: "java-en-function-databasemetadata-supportsresultsetholdability"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsResultSetHoldability"
signature: "boolean supportsResultSetHoldability(int holdability) throws SQLException"
title: "DatabaseMetaData.supportsResultSetHoldability"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsResultSetHoldability

```java
boolean supportsResultSetHoldability(int holdability) throws SQLException
```

Retrieves whether this database supports the given result set holdability.

**参数**

- **holdability** — one of the following constants: `ResultSet.HOLD_CURSORS_OVER_COMMIT` or `ResultSet.CLOSE_CURSORS_AT_COMMIT`

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

**参见**

- Connection

> *Since 1.4*
