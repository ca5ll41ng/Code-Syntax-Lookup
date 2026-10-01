---
id: "java-en-function-databasemetadata-supportsgroupbyunrelated"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsGroupByUnrelated"
signature: "boolean supportsGroupByUnrelated() throws SQLException"
title: "DatabaseMetaData.supportsGroupByUnrelated"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsGroupByUnrelated

```java
boolean supportsGroupByUnrelated() throws SQLException
```

Retrieves whether this database supports using a column that is
 not in the `SELECT` statement in a
 `GROUP BY` clause.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
