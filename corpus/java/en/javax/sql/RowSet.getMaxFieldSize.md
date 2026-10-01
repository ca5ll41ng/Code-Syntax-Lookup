---
id: "java-en-function-rowset-getmaxfieldsize"
language: "java"
lang: "en"
category: "function"
name: "RowSet.getMaxFieldSize"
signature: "int getMaxFieldSize() throws SQLException"
title: "RowSet.getMaxFieldSize"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.getMaxFieldSize

```java
int getMaxFieldSize() throws SQLException
```

Retrieves the maximum number of bytes that may be returned
 for certain column values.
 This limit applies only to `BINARY`,
 `VARBINARY`, `LONGVARBINARYBINARY`, `CHAR`,
 `VARCHAR`, `LONGVARCHAR`, `NCHAR`
 and `NVARCHAR` columns.
 If the limit is exceeded, the excess data is silently discarded.

**返回**

- the current maximum column size limit; zero means that there is no limit

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #setMaxFieldSize
