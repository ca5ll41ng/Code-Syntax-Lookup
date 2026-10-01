---
id: "java-en-function-databasemetadata-useslocalfilepertable"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.usesLocalFilePerTable"
signature: "boolean usesLocalFilePerTable() throws SQLException"
title: "DatabaseMetaData.usesLocalFilePerTable"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.usesLocalFilePerTable

```java
boolean usesLocalFilePerTable() throws SQLException
```

Retrieves whether this database uses a file for each table.

**返回**

- `true` if this database uses a local file for each table; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
