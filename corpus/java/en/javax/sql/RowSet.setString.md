---
id: "java-en-function-rowset-setstring"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setString"
signature: "void setString(int parameterIndex, String x) throws SQLException"
title: "RowSet.setString"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setString

```java
void setString(int parameterIndex, String x) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 to the given Java `String` value. Before sending it to the
 database, the driver converts this to an SQL `VARCHAR` or
 `LONGVARCHAR` value, depending on the argument's size relative
 to the driver's limits on `VARCHAR` values.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the parameter value

**异常**

- **SQLException** — if a database access error occurs
