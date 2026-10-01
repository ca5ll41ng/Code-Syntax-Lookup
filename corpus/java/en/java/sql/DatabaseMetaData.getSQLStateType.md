---
id: "java-en-function-databasemetadata-getsqlstatetype"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getSQLStateType"
signature: "int getSQLStateType() throws SQLException"
title: "DatabaseMetaData.getSQLStateType"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getSQLStateType

```java
int getSQLStateType() throws SQLException
```

Indicates whether the SQLSTATE returned by `SQLException.getSQLState`
 is X/Open (now known as Open Group) SQL CLI or SQL:2003.

**返回**

- the type of SQLSTATE; one of: sqlStateXOpen or sqlStateSQL

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.4*
