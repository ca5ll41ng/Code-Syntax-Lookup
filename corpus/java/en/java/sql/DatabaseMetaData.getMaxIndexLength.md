---
id: "java-en-function-databasemetadata-getmaxindexlength"
language: "java"
lang: "en"
category: "function"
name: "DatabaseMetaData.getMaxIndexLength"
signature: "int getMaxIndexLength() throws SQLException"
title: "DatabaseMetaData.getMaxIndexLength"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DatabaseMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatabaseMetaData.getMaxIndexLength

```java
int getMaxIndexLength() throws SQLException
```

Retrieves the maximum number of bytes this database allows for an
 index, including all of the parts of the index.

**返回**

- the maximum number of bytes allowed; this limit includes the composite of all the constituent parts of the index; a result of zero means that there is no limit or the limit is not known

**异常**

- **SQLException** — if a database access error occurs
