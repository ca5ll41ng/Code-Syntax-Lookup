---
id: "java-en-function-rowsetmetadata-setschemaname"
language: "java"
lang: "en"
category: "function"
name: "RowSetMetaData.setSchemaName"
signature: "void setSchemaName(int columnIndex, String schemaName) throws SQLException"
title: "RowSetMetaData.setSchemaName"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData.setSchemaName

```java
void setSchemaName(int columnIndex, String schemaName) throws SQLException
```

Sets the name of the designated column's table's schema, if any, to
 the given `String`.

**参数**

- **columnIndex** — the first column is 1, the second is 2, ...
- **schemaName** — the schema name

**异常**

- **SQLException** — if a database access error occurs
