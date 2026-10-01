---
id: "java-en-function-resultsetmetadata-getcolumnname"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.getColumnName"
signature: "String getColumnName(int column) throws SQLException"
title: "ResultSetMetaData.getColumnName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.getColumnName

```java
String getColumnName(int column) throws SQLException
```

Get the designated column's name.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- column name

**异常**

- **SQLException** — if a database access error occurs
