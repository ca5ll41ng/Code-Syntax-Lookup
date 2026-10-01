---
id: "java-en-function-rowset-setboolean"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setBoolean"
signature: "void setBoolean(int parameterIndex, boolean x) throws SQLException"
title: "RowSet.setBoolean"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setBoolean

```java
void setBoolean(int parameterIndex, boolean x) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 to the given Java `boolean` value. The driver converts this to
 an SQL `BIT` value before sending it to the database.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the parameter value

**异常**

- **SQLException** — if a database access error occurs
