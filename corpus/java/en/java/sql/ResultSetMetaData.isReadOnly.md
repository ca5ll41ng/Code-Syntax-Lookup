---
id: "java-en-function-resultsetmetadata-isreadonly"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.isReadOnly"
signature: "boolean isReadOnly(int column) throws SQLException"
title: "ResultSetMetaData.isReadOnly"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.isReadOnly

```java
boolean isReadOnly(int column) throws SQLException
```

Indicates whether the designated column is definitely not writable.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
