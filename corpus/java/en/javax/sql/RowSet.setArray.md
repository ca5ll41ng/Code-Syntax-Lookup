---
id: "java-en-function-rowset-setarray"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setArray"
signature: "void setArray (int i, Array x) throws SQLException"
title: "RowSet.setArray"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setArray

```java
void setArray (int i, Array x) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 with the given  `Array` value.  The driver will convert this
 to the `ARRAY` value that the `Array` object
 represents before sending it to the database.

**参数**

- **i** — the first parameter is 1, the second is 2, ...
- **x** — an object representing an SQL array

**异常**

- **SQLException** — if a database access error occurs
