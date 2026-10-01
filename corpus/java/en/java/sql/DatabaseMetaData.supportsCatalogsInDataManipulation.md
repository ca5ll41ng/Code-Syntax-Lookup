---
id: "java-en-function-databasemetadata-supportscatalogsindatamanipulation"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsCatalogsInDataManipulation"
signature: "boolean supportsCatalogsInDataManipulation() throws SQLException"
title: "DatabaseMetaData.supportsCatalogsInDataManipulation"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsCatalogsInDataManipulation

```java
boolean supportsCatalogsInDataManipulation() throws SQLException
```

Retrieves whether a catalog name can be used in a data manipulation statement.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
