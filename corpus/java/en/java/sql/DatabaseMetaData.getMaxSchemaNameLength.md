---
id: "java-en-function-databasemetadata-getmaxschemanamelength"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxSchemaNameLength"
signature: "int getMaxSchemaNameLength() throws SQLException"
title: "DatabaseMetaData.getMaxSchemaNameLength"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxSchemaNameLength

```java
int getMaxSchemaNameLength() throws SQLException
```

Retrieves the maximum number of characters that this database allows in a
 schema name.

**返回**

- the maximum number of characters allowed in a schema name; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
