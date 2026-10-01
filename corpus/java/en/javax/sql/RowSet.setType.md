---
id: "java-en-function-rowset-settype"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setType"
signature: "void setType(int type) throws SQLException"
title: "RowSet.setType"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setType

```java
void setType(int type) throws SQLException
```

Sets the type of this `RowSet` object to the given type.
 This method is used to change the type of a rowset, which is by
 default read-only and non-scrollable.

**参数**

- **type** — one of the `ResultSet` constants specifying a type: `ResultSet.TYPE_FORWARD_ONLY`, `ResultSet.TYPE_SCROLL_INSENSITIVE`, or `ResultSet.TYPE_SCROLL_SENSITIVE`

**异常**

- **SQLException** — if a database access error occurs

**参见**

- java.sql.ResultSet#getType
