---
id: "java-en-function-databasemetadata-nullsaresortedatstart"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.nullsAreSortedAtStart"
signature: "boolean nullsAreSortedAtStart() throws SQLException"
title: "DatabaseMetaData.nullsAreSortedAtStart"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.nullsAreSortedAtStart

```java
boolean nullsAreSortedAtStart() throws SQLException
```

Retrieves whether `NULL` values are sorted at the start regardless
 of sort order.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
