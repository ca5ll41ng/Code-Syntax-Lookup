---
id: "java-en-function-databasemetadata-getsearchstringescape"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getSearchStringEscape"
signature: "String getSearchStringEscape() throws SQLException"
title: "DatabaseMetaData.getSearchStringEscape"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getSearchStringEscape

```java
String getSearchStringEscape() throws SQLException
```

Retrieves the string that can be used to escape wildcard characters.
 This is the string that can be used to escape '_' or '%' in
 the catalog search parameters that are a pattern (and therefore use one
 of the wildcard characters).

 

The '_' character represents any single character;
 the '%' character represents any sequence of zero or
 more characters.

**返回**

- the string used to escape wildcard characters

**异常**

- **SQLException** — if a database access error occurs
