---
id: "java-en-function-databasemetadata-supportsopenstatementsacrosscommit"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsOpenStatementsAcrossCommit"
signature: "boolean supportsOpenStatementsAcrossCommit() throws SQLException"
title: "DatabaseMetaData.supportsOpenStatementsAcrossCommit"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsOpenStatementsAcrossCommit

```java
boolean supportsOpenStatementsAcrossCommit() throws SQLException
```

Retrieves whether this database supports keeping statements open
 across commits.

**返回**

- `true` if statements always remain open; `false` if they might not remain open

**异常**

- **SQLException** — if a database access error occurs
