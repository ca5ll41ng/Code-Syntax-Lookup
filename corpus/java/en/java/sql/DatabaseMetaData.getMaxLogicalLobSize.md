---
id: "java-en-function-databasemetadata-getmaxlogicallobsize"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxLogicalLobSize"
signature: "default long getMaxLogicalLobSize() throws SQLException"
title: "DatabaseMetaData.getMaxLogicalLobSize"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxLogicalLobSize

```java
default long getMaxLogicalLobSize() throws SQLException
```

Retrieves the maximum number of bytes this database allows for
 the logical size for a `LOB`.

 The default implementation will return `0`

**返回**

- the maximum number of bytes allowed; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs

> *Since 1.8*
