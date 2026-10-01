---
id: "java-en-function-rowset-setblob"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setBlob"
signature: "void setBlob (int i, Blob x) throws SQLException"
title: "RowSet.setBlob"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setBlob

```java
void setBlob (int i, Blob x) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 with the given  `Blob` value.  The driver will convert this
 to the `BLOB` value that the `Blob` object
 represents before sending it to the database.

**参数**

- **i** — the first parameter is 1, the second is 2, ...
- **x** — an object representing a BLOB

**异常**

- **SQLException** — if a database access error occurs
