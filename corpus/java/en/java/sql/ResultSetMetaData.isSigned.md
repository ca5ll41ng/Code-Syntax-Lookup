---
id: "java-en-function-resultsetmetadata-issigned"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.isSigned"
signature: "boolean isSigned(int column) throws SQLException"
title: "ResultSetMetaData.isSigned"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.isSigned

```java
boolean isSigned(int column) throws SQLException
```

Indicates whether values in the designated column are signed numbers.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
