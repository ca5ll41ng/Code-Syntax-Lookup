---
id: "java-en-function-resultsetmetadata-isnullable"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.isNullable"
signature: "int isNullable(int column) throws SQLException"
title: "ResultSetMetaData.isNullable"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.isNullable

```java
int isNullable(int column) throws SQLException
```

Indicates the nullability of values in the designated column.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- the nullability status of the given column; one of `columnNoNulls`, `columnNullable` or `columnNullableUnknown`

**异常**

- **SQLException** — if a database access error occurs
