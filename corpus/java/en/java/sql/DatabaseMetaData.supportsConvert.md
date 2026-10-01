---
id: "java-en-function-databasemetadata-supportsconvert"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsConvert"
signature: "boolean supportsConvert() throws SQLException"
title: "DatabaseMetaData.supportsConvert"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsConvert

```java
boolean supportsConvert() throws SQLException
```

Retrieves whether this database supports the JDBC scalar function
 `CONVERT` for the conversion of one JDBC type to another.
 The JDBC types are the generic SQL data types defined
 in `java.sql.Types`.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
