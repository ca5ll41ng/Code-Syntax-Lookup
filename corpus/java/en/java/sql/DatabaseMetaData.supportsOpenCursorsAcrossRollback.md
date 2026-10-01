---
id: "java-en-function-databasemetadata-supportsopencursorsacrossrollback"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsOpenCursorsAcrossRollback"
signature: "boolean supportsOpenCursorsAcrossRollback() throws SQLException"
title: "DatabaseMetaData.supportsOpenCursorsAcrossRollback"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsOpenCursorsAcrossRollback

```java
boolean supportsOpenCursorsAcrossRollback() throws SQLException
```

Retrieves whether this database supports keeping cursors open
 across rollbacks.

**返回**

- `true` if cursors always remain open; `false` if they might not remain open

**异常**

- **SQLException** — if a database access error occurs
