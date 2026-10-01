---
id: "java-en-function-databasemetadata-geturl"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getURL"
signature: "String getURL() throws SQLException"
title: "DatabaseMetaData.getURL"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getURL

```java
String getURL() throws SQLException
```

Retrieves the URL for this DBMS.

**返回**

- the URL for this DBMS or `null` if it cannot be generated

**异常**

- **SQLException** — if a database access error occurs
