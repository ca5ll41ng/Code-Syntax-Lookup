---
id: "java-en-function-resultsetmetadata-getcolumntype"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.getColumnType"
signature: "int getColumnType(int column) throws SQLException"
title: "ResultSetMetaData.getColumnType"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.getColumnType

```java
int getColumnType(int column) throws SQLException
```

Retrieves the designated column's SQL type.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- SQL type from java.sql.Types

**异常**

- **SQLException** — if a database access error occurs

**参见**

- Types
