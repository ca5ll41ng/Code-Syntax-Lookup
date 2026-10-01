---
id: "java-en-function-databasemetadata-sqlstatexopen"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.sqlStateXOpen"
signature: "int sqlStateXOpen = 1"
title: "DatabaseMetaData.sqlStateXOpen"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.sqlStateXOpen

```java
int sqlStateXOpen = 1
```

A possible return value for the method
 `DatabaseMetaData.getSQLStateType` which is used to indicate
 whether the value returned by the method
 `SQLException.getSQLState` is an
 X/Open (now know as Open Group) SQL CLI SQLSTATE value.

> *Since 1.4*
