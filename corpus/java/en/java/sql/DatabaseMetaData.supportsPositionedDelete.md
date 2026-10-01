---
id: "java-en-function-databasemetadata-supportspositioneddelete"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsPositionedDelete"
signature: "boolean supportsPositionedDelete() throws SQLException"
title: "DatabaseMetaData.supportsPositionedDelete"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsPositionedDelete

```java
boolean supportsPositionedDelete() throws SQLException
```

Retrieves whether this database supports positioned `DELETE`
 statements.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
