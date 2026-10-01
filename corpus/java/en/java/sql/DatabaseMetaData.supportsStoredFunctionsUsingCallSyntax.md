---
id: "java-en-function-databasemetadata-supportsstoredfunctionsusingcallsyntax"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.supportsStoredFunctionsUsingCallSyntax"
signature: "boolean supportsStoredFunctionsUsingCallSyntax() throws SQLException"
title: "DatabaseMetaData.supportsStoredFunctionsUsingCallSyntax"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.supportsStoredFunctionsUsingCallSyntax

```java
boolean supportsStoredFunctionsUsingCallSyntax() throws SQLException
```

Retrieves whether this database supports invoking user-defined or vendor functions
 using the stored procedure escape syntax.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.6*
