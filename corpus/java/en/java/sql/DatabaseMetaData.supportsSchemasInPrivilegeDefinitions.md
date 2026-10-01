---
id: "java-en-function-databasemetadata-supportsschemasinprivilegedefinitions"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsSchemasInPrivilegeDefinitions"
signature: "boolean supportsSchemasInPrivilegeDefinitions() throws SQLException"
title: "DatabaseMetaData.supportsSchemasInPrivilegeDefinitions"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsSchemasInPrivilegeDefinitions

```java
boolean supportsSchemasInPrivilegeDefinitions() throws SQLException
```

Retrieves whether a schema name can be used in a privilege definition statement.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
