---
id: "java-en-function-resultsetmetadata-getscale"
language: "java"
lang: "en"
category: "function"
name: "ResultSetMetaData.getScale"
signature: "int getScale(int column) throws SQLException"
title: "ResultSetMetaData.getScale"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSetMetaData.getScale

```java
int getScale(int column) throws SQLException
```

Gets the designated column's number of digits to right of the decimal point.
 0 is returned for data types where the scale is not applicable.

**参数**

- **column** — the first column is 1, the second is 2, ...

**返回**

- scale

**异常**

- **SQLException** — if a database access error occurs
