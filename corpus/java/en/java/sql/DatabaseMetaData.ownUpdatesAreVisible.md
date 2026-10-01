---
id: "java-en-function-databasemetadata-ownupdatesarevisible"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.ownUpdatesAreVisible"
signature: "boolean ownUpdatesAreVisible(int type) throws SQLException"
title: "DatabaseMetaData.ownUpdatesAreVisible"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.ownUpdatesAreVisible

```java
boolean ownUpdatesAreVisible(int type) throws SQLException
```

Retrieves whether for the given type of `ResultSet` object,
 the result set's own updates are visible.

**参数**

- **type** — the `ResultSet` type; one of `ResultSet.TYPE_FORWARD_ONLY`, `ResultSet.TYPE_SCROLL_INSENSITIVE`, or `ResultSet.TYPE_SCROLL_SENSITIVE`

**返回**

- `true` if updates are visible for the given result set type; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.2*
