---
id: "java-en-function-databasemetadata-iscatalogatstart"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.isCatalogAtStart"
signature: "boolean isCatalogAtStart() throws SQLException"
title: "DatabaseMetaData.isCatalogAtStart"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.isCatalogAtStart

```java
boolean isCatalogAtStart() throws SQLException
```

Retrieves whether a catalog appears at the start of a fully qualified
 table name.  If not, the catalog appears at the end.

**返回**

- `true` if the catalog name appears at the beginning of a fully qualified table name; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
