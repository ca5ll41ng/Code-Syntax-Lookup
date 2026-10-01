---
id: "java-en-function-rowset-setref"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setRef"
signature: "void setRef (int i, Ref x) throws SQLException"
title: "RowSet.setRef"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setRef

```java
void setRef (int i, Ref x) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 with the given  `Ref` value.  The driver will convert this
 to the appropriate `REF()` value.

**参数**

- **i** — the first parameter is 1, the second is 2, ...
- **x** — an object representing data of an SQL `REF` type

**异常**

- **SQLException** — if a database access error occurs
