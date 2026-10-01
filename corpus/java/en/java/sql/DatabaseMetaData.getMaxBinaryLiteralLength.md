---
id: "java-en-function-databasemetadata-getmaxbinaryliterallength"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxBinaryLiteralLength"
signature: "int getMaxBinaryLiteralLength() throws SQLException"
title: "DatabaseMetaData.getMaxBinaryLiteralLength"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxBinaryLiteralLength

```java
int getMaxBinaryLiteralLength() throws SQLException
```

Retrieves the maximum number of hex characters this database allows in an
 inline binary literal.

**返回**

- max the maximum length (in hex characters) for a binary literal; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
