---
id: "java-en-function-databasemetadata-supportssharding"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsSharding"
signature: "default boolean supportsSharding() throws SQLException"
title: "DatabaseMetaData.supportsSharding"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsSharding

```java
default boolean supportsSharding() throws SQLException
```

Retrieves whether this database supports sharding.
 The default implementation will return `false`

**返回**

- `true` if this database supports sharding; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 9*
