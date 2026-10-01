---
id: "java-en-function-databasemetadata-getrowidlifetime"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getRowIdLifetime"
signature: "RowIdLifetime getRowIdLifetime() throws SQLException"
title: "DatabaseMetaData.getRowIdLifetime"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getRowIdLifetime

```java
RowIdLifetime getRowIdLifetime() throws SQLException
```

Indicates whether this data source supports the SQL `ROWID` type,
 and the lifetime for which a `RowId` object remains valid.

**返回**

- the status indicating the lifetime of a `RowId`

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.6*
