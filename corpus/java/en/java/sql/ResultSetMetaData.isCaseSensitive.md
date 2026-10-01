---
id: "java-en-function-resultsetmetadata-iscasesensitive"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.isCaseSensitive"
signature: "boolean isCaseSensitive(int column) throws SQLException"
title: "ResultSetMetaData.isCaseSensitive"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.isCaseSensitive

```java
boolean isCaseSensitive(int column) throws SQLException
```

Indicates whether a column's case matters.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
