---
id: "java-en-function-databasemetadata-supportslimitedouterjoins"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsLimitedOuterJoins"
signature: "boolean supportsLimitedOuterJoins() throws SQLException"
title: "DatabaseMetaData.supportsLimitedOuterJoins"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsLimitedOuterJoins

```java
boolean supportsLimitedOuterJoins() throws SQLException
```

Retrieves whether this database provides limited support for outer
 joins.  (This will be `true` if the method
 `supportsFullOuterJoins` returns `true`).

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
