---
id: "java-en-function-resultsetmetadata-gettablename"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.getTableName"
signature: "String getTableName(int column) throws SQLException"
title: "ResultSetMetaData.getTableName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.getTableName

```java
String getTableName(int column) throws SQLException
```

Gets the designated column's table name.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- table name or "" if not applicable

**异常**

- **SQLException** — if a database access error occurs
