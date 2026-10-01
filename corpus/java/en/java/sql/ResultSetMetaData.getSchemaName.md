---
id: "java-en-function-resultsetmetadata-getschemaname"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.getSchemaName"
signature: "String getSchemaName(int column) throws SQLException"
title: "ResultSetMetaData.getSchemaName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.getSchemaName

```java
String getSchemaName(int column) throws SQLException
```

Get the designated column's table's schema.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- schema name or "" if not applicable

**异常**

- **SQLException** — if a database access error occurs
