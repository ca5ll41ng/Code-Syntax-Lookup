---
id: "java-en-function-resultsetmetadata-getcolumnlabel"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.getColumnLabel"
signature: "String getColumnLabel(int column) throws SQLException"
title: "ResultSetMetaData.getColumnLabel"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.getColumnLabel

```java
String getColumnLabel(int column) throws SQLException
```

Gets the designated column's suggested title for use in printouts and
 displays. The suggested title is usually specified by the SQL `AS`
 clause.  If a SQL `AS` is not specified, the value returned from
 `getColumnLabel` will be the same as the value returned by the
 `getColumnName` method.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- the suggested column title

**异常**

- **SQLException** — if a database access error occurs
