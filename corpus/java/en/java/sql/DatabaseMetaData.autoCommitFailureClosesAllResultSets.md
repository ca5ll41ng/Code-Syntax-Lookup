---
id: "java-en-function-databasemetadata-autocommitfailureclosesallresultsets"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.autoCommitFailureClosesAllResultSets"
signature: "boolean autoCommitFailureClosesAllResultSets() throws SQLException"
title: "DatabaseMetaData.autoCommitFailureClosesAllResultSets"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.autoCommitFailureClosesAllResultSets

```java
boolean autoCommitFailureClosesAllResultSets() throws SQLException
```

Retrieves whether a `SQLException` while autoCommit is `true` indicates
 that all open ResultSets are closed, even ones that are holdable.  When a `SQLException` occurs while
 autocommit is `true`, it is vendor specific whether the JDBC driver responds with a commit operation, a
 rollback operation, or by doing neither a commit nor a rollback.  A potential result of this difference
 is in whether or not holdable ResultSets are closed.

**返回**

- `true` if so; `false` otherwise

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.6*
