---
id: "java-en-function-databasemetadata-sqlstatesql99"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.sqlStateSQL99"
signature: "int sqlStateSQL99 = sqlStateSQL"
title: "DatabaseMetaData.sqlStateSQL99"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.sqlStateSQL99

```java
int sqlStateSQL99 = sqlStateSQL
```

A possible return value for the method
 `DatabaseMetaData.getSQLStateType` which is used to indicate
 whether the value returned by the method
 `SQLException.getSQLState` is an SQL99 SQLSTATE value.
 

 **Note:**This constant remains only for compatibility reasons. Developers
 should use the constant `sqlStateSQL` instead.

> *Since 1.4*
