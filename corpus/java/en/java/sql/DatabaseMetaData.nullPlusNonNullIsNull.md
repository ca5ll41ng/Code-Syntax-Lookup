---
id: "java-en-function-databasemetadata-nullplusnonnullisnull"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.nullPlusNonNullIsNull"
signature: "boolean nullPlusNonNullIsNull() throws SQLException"
title: "DatabaseMetaData.nullPlusNonNullIsNull"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.nullPlusNonNullIsNull

```java
boolean nullPlusNonNullIsNull() throws SQLException
```

Retrieves whether this database supports concatenations between
 `NULL` and non-`NULL` values being
 `NULL`.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
