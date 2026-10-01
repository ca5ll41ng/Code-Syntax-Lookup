---
id: "java-en-function-databasemetadata-supportsopenstatementsacrossrollback"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsOpenStatementsAcrossRollback"
signature: "boolean supportsOpenStatementsAcrossRollback() throws SQLException"
title: "DatabaseMetaData.supportsOpenStatementsAcrossRollback"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsOpenStatementsAcrossRollback

```java
boolean supportsOpenStatementsAcrossRollback() throws SQLException
```

Retrieves whether this database supports keeping statements open
 across rollbacks.

**返回**

- `true` if statements always remain open; `false` if they might not remain open

**异常**

- **SQLException** — if a database access error occurs
