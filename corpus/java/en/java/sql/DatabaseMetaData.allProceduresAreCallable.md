---
id: "java-en-function-databasemetadata-allproceduresarecallable"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.allProceduresAreCallable"
signature: "boolean allProceduresAreCallable() throws SQLException"
title: "DatabaseMetaData.allProceduresAreCallable"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.allProceduresAreCallable

```java
boolean allProceduresAreCallable() throws SQLException
```

Retrieves whether the current user can call all the procedures
 returned by the method `getProcedures`.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs
