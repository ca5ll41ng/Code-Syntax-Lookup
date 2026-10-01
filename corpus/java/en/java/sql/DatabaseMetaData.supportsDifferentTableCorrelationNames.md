---
id: "java-en-function-databasemetadata-supportsdifferenttablecorrelationnames"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsDifferentTableCorrelationNames"
signature: "boolean supportsDifferentTableCorrelationNames() throws SQLException"
title: "DatabaseMetaData.supportsDifferentTableCorrelationNames"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsDifferentTableCorrelationNames

```java
boolean supportsDifferentTableCorrelationNames() throws SQLException
```

Retrieves whether, when table correlation names are supported, they
 are restricted to being different from the names of the tables.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
