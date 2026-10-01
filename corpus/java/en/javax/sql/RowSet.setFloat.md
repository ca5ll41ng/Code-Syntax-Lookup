---
id: "java-en-function-rowset-setfloat"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setFloat"
signature: "void setFloat(int parameterIndex, float x) throws SQLException"
title: "RowSet.setFloat"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setFloat

```java
void setFloat(int parameterIndex, float x) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 to the given Java `float` value. The driver converts this to
 an SQL `REAL` value before sending it to the database.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the parameter value

**异常**

- **SQLException** — if a database access error occurs
