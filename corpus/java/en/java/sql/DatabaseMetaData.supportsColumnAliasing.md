---
id: "java-en-function-databasemetadata-supportscolumnaliasing"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsColumnAliasing"
signature: "boolean supportsColumnAliasing() throws SQLException"
title: "DatabaseMetaData.supportsColumnAliasing"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsColumnAliasing

```java
boolean supportsColumnAliasing() throws SQLException
```

Retrieves whether this database supports column aliasing.

 

If so, the SQL AS clause can be used to provide names for
 computed columns or to provide alias names for columns as
 required.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
