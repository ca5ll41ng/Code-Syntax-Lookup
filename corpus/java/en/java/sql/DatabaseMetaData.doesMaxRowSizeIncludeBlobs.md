---
id: "java-en-function-databasemetadata-doesmaxrowsizeincludeblobs"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.doesMaxRowSizeIncludeBlobs"
signature: "boolean doesMaxRowSizeIncludeBlobs() throws SQLException"
title: "DatabaseMetaData.doesMaxRowSizeIncludeBlobs"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.doesMaxRowSizeIncludeBlobs

```java
boolean doesMaxRowSizeIncludeBlobs() throws SQLException
```

Retrieves whether the return value for the method
 `getMaxRowSize` includes the SQL data types
 `LONGVARCHAR` and `LONGVARBINARY`.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
