---
id: "java-en-function-databasemetadata-typepredbasic"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.typePredBasic"
signature: "int typePredBasic = 2"
title: "DatabaseMetaData.typePredBasic"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.typePredBasic

```java
int typePredBasic = 2
```

Indicates that the data type can be only be used in `WHERE`
 search clauses
 that do not use `LIKE` predicates.
 

 A possible value for column `SEARCHABLE` in the
 `ResultSet` object returned by the method
 `getTypeInfo`.
