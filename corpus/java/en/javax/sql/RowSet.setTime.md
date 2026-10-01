---
id: "java-en-function-rowset-settime"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setTime"
signature: "void setTime(int parameterIndex, java.sql.Time x) throws SQLException"
title: "RowSet.setTime"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setTime

```java
void setTime(int parameterIndex, java.sql.Time x) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 to the given `java.sql.Time` value. The driver converts this to
 an SQL `TIME` value before sending it to the database, using the
 default `java.util.Calendar` to calculate it.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the parameter value

**异常**

- **SQLException** — if a database access error occurs
