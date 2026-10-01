---
id: "java-en-function-rowset-setmaxfieldsize"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setMaxFieldSize"
signature: "void setMaxFieldSize(int max) throws SQLException"
title: "RowSet.setMaxFieldSize"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setMaxFieldSize

```java
void setMaxFieldSize(int max) throws SQLException
```

Sets the maximum number of bytes that can be returned for a column
 value to the given number of bytes.
 This limit applies only to `BINARY`,
 `VARBINARY`, `LONGVARBINARYBINARY`, `CHAR`,
 `VARCHAR`, `LONGVARCHAR`, `NCHAR`
 and `NVARCHAR` columns.
 If the limit is exceeded, the excess data is silently discarded.
 For maximum portability, use values greater than 256.

**参数**

- **max** — the new max column size limit in bytes; zero means unlimited

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getMaxFieldSize
