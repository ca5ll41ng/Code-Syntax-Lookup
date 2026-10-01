---
id: "java-en-function-databasemetadata-supportsgroupby"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsGroupBy"
signature: "boolean supportsGroupBy() throws SQLException"
title: "DatabaseMetaData.supportsGroupBy"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsGroupBy

```java
boolean supportsGroupBy() throws SQLException
```

Retrieves whether this database supports some form of
 `GROUP BY` clause.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
