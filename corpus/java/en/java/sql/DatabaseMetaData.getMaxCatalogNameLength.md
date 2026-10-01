---
id: "java-en-function-databasemetadata-getmaxcatalognamelength"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxCatalogNameLength"
signature: "int getMaxCatalogNameLength() throws SQLException"
title: "DatabaseMetaData.getMaxCatalogNameLength"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxCatalogNameLength

```java
int getMaxCatalogNameLength() throws SQLException
```

Retrieves the maximum number of characters that this database allows in a
 catalog name.

**返回**

- the maximum number of characters allowed in a catalog name; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
