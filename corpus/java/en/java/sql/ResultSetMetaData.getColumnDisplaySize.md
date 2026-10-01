---
id: "java-en-function-resultsetmetadata-getcolumndisplaysize"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.getColumnDisplaySize"
signature: "int getColumnDisplaySize(int column) throws SQLException"
title: "ResultSetMetaData.getColumnDisplaySize"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.getColumnDisplaySize

```java
int getColumnDisplaySize(int column) throws SQLException
```

Indicates the designated column's normal maximum width in characters.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- the normal maximum number of characters allowed as the width of the designated column

**异常**

- **SQLException** — if a database access error occurs
