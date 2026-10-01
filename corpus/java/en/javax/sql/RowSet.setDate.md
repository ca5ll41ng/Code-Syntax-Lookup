---
id: "java-en-function-rowset-setdate"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setDate"
signature: "void setDate(int parameterIndex, java.sql.Date x) throws SQLException"
title: "RowSet.setDate"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setDate

```java
void setDate(int parameterIndex, java.sql.Date x) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 to the given `java.sql.Date` value. The driver converts this to
 an SQL `DATE` value before sending it to the database, using the
 default `java.util.Calendar` to calculate the date.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the parameter value

**异常**

- **SQLException** — if a database access error occurs
