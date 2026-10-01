---
id: "java-en-function-databasemetadata-supportsmultipleresultsets"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsMultipleResultSets"
signature: "boolean supportsMultipleResultSets() throws SQLException"
title: "DatabaseMetaData.supportsMultipleResultSets"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsMultipleResultSets

```java
boolean supportsMultipleResultSets() throws SQLException
```

Retrieves whether this database supports getting multiple
 `ResultSet` objects from a single call to the
 method `execute`.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
