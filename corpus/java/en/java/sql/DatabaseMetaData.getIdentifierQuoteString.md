---
id: "java-en-function-databasemetadata-getidentifierquotestring"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getIdentifierQuoteString"
signature: "String getIdentifierQuoteString() throws SQLException"
title: "DatabaseMetaData.getIdentifierQuoteString"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getIdentifierQuoteString

```java
String getIdentifierQuoteString() throws SQLException
```

Retrieves the string used to quote SQL identifiers.
 This method returns a space " " if identifier quoting is not supported.

**返回**

- the quoting string or a space if quoting is not supported

**异常**

- **SQLException** — if a database access error occurs
