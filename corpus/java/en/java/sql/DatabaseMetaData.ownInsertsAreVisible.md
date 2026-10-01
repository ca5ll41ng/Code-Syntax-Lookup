---
id: "java-en-function-databasemetadata-owninsertsarevisible"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.ownInsertsAreVisible"
signature: "boolean ownInsertsAreVisible(int type) throws SQLException"
title: "DatabaseMetaData.ownInsertsAreVisible"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.ownInsertsAreVisible

```java
boolean ownInsertsAreVisible(int type) throws SQLException
```

Retrieves whether a result set's own inserts are visible.

**参数**

- **type** — the `ResultSet` type; one of `ResultSet.TYPE_FORWARD_ONLY`, `ResultSet.TYPE_SCROLL_INSENSITIVE`, or `ResultSet.TYPE_SCROLL_SENSITIVE`

**返回**

- `true` if inserts are visible for the given result set type; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.2*
