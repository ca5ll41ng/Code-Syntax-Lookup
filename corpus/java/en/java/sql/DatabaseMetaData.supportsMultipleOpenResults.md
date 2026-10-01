---
id: "java-en-function-databasemetadata-supportsmultipleopenresults"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsMultipleOpenResults"
signature: "boolean supportsMultipleOpenResults() throws SQLException"
title: "DatabaseMetaData.supportsMultipleOpenResults"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsMultipleOpenResults

```java
boolean supportsMultipleOpenResults() throws SQLException
```

Retrieves whether it is possible to have multiple `ResultSet` objects
 returned from a `CallableStatement` object
 simultaneously.

**返回**

- `true` if a `CallableStatement` object can return multiple `ResultSet` objects simultaneously; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
