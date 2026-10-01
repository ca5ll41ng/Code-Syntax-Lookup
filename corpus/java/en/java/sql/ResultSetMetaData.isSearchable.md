---
id: "java-en-function-resultsetmetadata-issearchable"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.isSearchable"
signature: "boolean isSearchable(int column) throws SQLException"
title: "ResultSetMetaData.isSearchable"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.isSearchable

```java
boolean isSearchable(int column) throws SQLException
```

Indicates whether the designated column can be used in a where clause.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
