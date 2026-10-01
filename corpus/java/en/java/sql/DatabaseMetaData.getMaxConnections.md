---
id: "java-en-function-databasemetadata-getmaxconnections"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxConnections"
signature: "int getMaxConnections() throws SQLException"
title: "DatabaseMetaData.getMaxConnections"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxConnections

```java
int getMaxConnections() throws SQLException
```

Retrieves the maximum number of concurrent connections to this
 database that are possible.

**返回**

- the maximum number of active connections possible at one time; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
