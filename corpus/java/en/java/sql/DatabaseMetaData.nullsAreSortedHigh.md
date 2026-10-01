---
id: "java-en-function-databasemetadata-nullsaresortedhigh"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.nullsAreSortedHigh"
signature: "boolean nullsAreSortedHigh() throws SQLException"
title: "DatabaseMetaData.nullsAreSortedHigh"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.nullsAreSortedHigh

```java
boolean nullsAreSortedHigh() throws SQLException
```

Retrieves whether `NULL` values are sorted high.
 Sorted high means that `NULL` values
 sort higher than any other value in a domain.  In an ascending order,
 if this method returns `true`,  `NULL` values
 will appear at the end. By contrast, the method
 `nullsAreSortedAtEnd` indicates whether `NULL` values
 are sorted at the end regardless of sort order.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
