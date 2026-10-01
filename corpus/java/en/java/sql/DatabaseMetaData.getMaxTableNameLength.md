---
id: "java-en-function-databasemetadata-getmaxtablenamelength"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxTableNameLength"
signature: "int getMaxTableNameLength() throws SQLException"
title: "DatabaseMetaData.getMaxTableNameLength"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxTableNameLength

```java
int getMaxTableNameLength() throws SQLException
```

Retrieves the maximum number of characters this database allows in
 a table name.

**返回**

- the maximum number of characters allowed for a table name; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
