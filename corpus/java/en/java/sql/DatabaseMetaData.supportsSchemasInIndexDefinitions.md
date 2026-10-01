---
id: "java-en-function-databasemetadata-supportsschemasinindexdefinitions"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsSchemasInIndexDefinitions"
signature: "boolean supportsSchemasInIndexDefinitions() throws SQLException"
title: "DatabaseMetaData.supportsSchemasInIndexDefinitions"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsSchemasInIndexDefinitions

```java
boolean supportsSchemasInIndexDefinitions() throws SQLException
```

Retrieves whether a schema name can be used in an index definition statement.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
