---
id: "java-en-function-databasemetadata-getresultsetholdability"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getResultSetHoldability"
signature: "int getResultSetHoldability() throws SQLException"
title: "DatabaseMetaData.getResultSetHoldability"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getResultSetHoldability

```java
int getResultSetHoldability() throws SQLException
```

Retrieves this database's default holdability for `ResultSet`
 objects.

**返回**

- the default holdability; either `ResultSet.HOLD_CURSORS_OVER_COMMIT` or `ResultSet.CLOSE_CURSORS_AT_COMMIT`

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
