---
id: "java-en-function-databasemetadata-updatesaredetected"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.updatesAreDetected"
signature: "boolean updatesAreDetected(int type) throws SQLException"
title: "DatabaseMetaData.updatesAreDetected"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.updatesAreDetected

```java
boolean updatesAreDetected(int type) throws SQLException
```

Retrieves whether or not a visible row update can be detected by
 calling the method `ResultSet.rowUpdated`.

**参数**

- **type** — the `ResultSet` type; one of `ResultSet.TYPE_FORWARD_ONLY`, `ResultSet.TYPE_SCROLL_INSENSITIVE`, or `ResultSet.TYPE_SCROLL_SENSITIVE`

**返回**

- `true` if changes are detected by the result set type; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.2*
