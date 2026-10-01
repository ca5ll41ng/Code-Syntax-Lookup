---
id: "java-en-function-resultsetmetadata-getcolumntypename"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.getColumnTypeName"
signature: "String getColumnTypeName(int column) throws SQLException"
title: "ResultSetMetaData.getColumnTypeName"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.getColumnTypeName

```java
String getColumnTypeName(int column) throws SQLException
```

Retrieves the designated column's database-specific type name.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- type name used by the database. If the column type is a user-defined type, then a fully-qualified type name is returned.

**异常**

- **SQLException** — if a database access error occurs
