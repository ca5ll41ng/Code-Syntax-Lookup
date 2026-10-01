---
id: "java-en-function-databasemetadata-getsqlkeywords"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getSQLKeywords"
signature: "String getSQLKeywords() throws SQLException"
title: "DatabaseMetaData.getSQLKeywords"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getSQLKeywords

```java
String getSQLKeywords() throws SQLException
```

Retrieves a comma-separated list of all of this database's SQL keywords
 that are NOT also SQL:2003 keywords.

**返回**

- the list of this database's keywords that are not also SQL:2003 keywords

**异常**

- **SQLException** — if a database access error occurs
