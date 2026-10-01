---
id: "java-en-function-databasemetadata-getmaxcursornamelength"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxCursorNameLength"
signature: "int getMaxCursorNameLength() throws SQLException"
title: "DatabaseMetaData.getMaxCursorNameLength"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxCursorNameLength

```java
int getMaxCursorNameLength() throws SQLException
```

Retrieves the maximum number of characters that this database allows in a
 cursor name.

**返回**

- the maximum number of characters allowed in a cursor name; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
