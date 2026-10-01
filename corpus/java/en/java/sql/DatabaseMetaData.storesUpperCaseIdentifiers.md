---
id: "java-en-function-databasemetadata-storesuppercaseidentifiers"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.storesUpperCaseIdentifiers"
signature: "boolean storesUpperCaseIdentifiers() throws SQLException"
title: "DatabaseMetaData.storesUpperCaseIdentifiers"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.storesUpperCaseIdentifiers

```java
boolean storesUpperCaseIdentifiers() throws SQLException
```

Retrieves whether this database treats mixed case unquoted SQL identifiers as
 case insensitive and stores them in upper case.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
