---
id: "java-en-function-databasemetadata-nullsaresortedatend"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.nullsAreSortedAtEnd"
signature: "boolean nullsAreSortedAtEnd() throws SQLException"
title: "DatabaseMetaData.nullsAreSortedAtEnd"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.nullsAreSortedAtEnd

```java
boolean nullsAreSortedAtEnd() throws SQLException
```

Retrieves whether `NULL` values are sorted at the end regardless of
 sort order.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
