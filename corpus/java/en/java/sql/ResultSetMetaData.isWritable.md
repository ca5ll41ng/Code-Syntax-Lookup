---
id: "java-en-function-resultsetmetadata-iswritable"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.isWritable"
signature: "boolean isWritable(int column) throws SQLException"
title: "ResultSetMetaData.isWritable"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.isWritable

```java
boolean isWritable(int column) throws SQLException
```

Indicates whether it is possible for a write on the designated column to succeed.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
