---
id: "java-en-function-databasemetadata-getextranamecharacters"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getExtraNameCharacters"
signature: "String getExtraNameCharacters() throws SQLException"
title: "DatabaseMetaData.getExtraNameCharacters"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getExtraNameCharacters

```java
String getExtraNameCharacters() throws SQLException
```

Retrieves all the "extra" characters that can be used in unquoted
 identifier names (those beyond a-z, A-Z, 0-9 and _).

**返回**

- the string containing the extra characters

**异常**

- **SQLException** — if a database access error occurs
