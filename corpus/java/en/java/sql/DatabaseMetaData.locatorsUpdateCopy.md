---
id: "java-en-function-databasemetadata-locatorsupdatecopy"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.locatorsUpdateCopy"
signature: "boolean locatorsUpdateCopy() throws SQLException"
title: "DatabaseMetaData.locatorsUpdateCopy"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.locatorsUpdateCopy

```java
boolean locatorsUpdateCopy() throws SQLException
```

Indicates whether updates made to a LOB are made on a copy or directly
 to the LOB.

**返回**

- `true` if updates are made to a copy of the LOB; `false` if updates are made directly to the LOB

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
