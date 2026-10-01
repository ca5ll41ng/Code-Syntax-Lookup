---
id: "java-en-function-databasemetadata-supportsrefcursors"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsRefCursors"
signature: "default boolean supportsRefCursors() throws SQLException"
title: "DatabaseMetaData.supportsRefCursors"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsRefCursors

```java
default boolean supportsRefCursors() throws SQLException
```

Retrieves whether this database supports REF CURSOR.

 The default implementation will return `false`

**返回**

- `true` if this database supports REF CURSOR; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.8*
