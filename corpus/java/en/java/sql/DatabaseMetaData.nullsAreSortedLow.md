---
id: "java-en-function-databasemetadata-nullsaresortedlow"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.nullsAreSortedLow"
signature: "boolean nullsAreSortedLow() throws SQLException"
title: "DatabaseMetaData.nullsAreSortedLow"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.nullsAreSortedLow

```java
boolean nullsAreSortedLow() throws SQLException
```

Retrieves whether `NULL` values are sorted low.
 Sorted low means that `NULL` values
 sort lower than any other value in a domain.  In an ascending order,
 if this method returns `true`,  `NULL` values
 will appear at the beginning. By contrast, the method
 `nullsAreSortedAtStart` indicates whether `NULL` values
 are sorted at the beginning regardless of sort order.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
