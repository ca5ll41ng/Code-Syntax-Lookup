---
id: "java-en-function-databasemetadata-supportsschemasinprocedurecalls"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsSchemasInProcedureCalls"
signature: "boolean supportsSchemasInProcedureCalls() throws SQLException"
title: "DatabaseMetaData.supportsSchemasInProcedureCalls"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsSchemasInProcedureCalls

```java
boolean supportsSchemasInProcedureCalls() throws SQLException
```

Retrieves whether a schema name can be used in a procedure call statement.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
