---
id: "java-en-function-rowset-setbytes"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setBytes"
signature: "void setBytes(int parameterIndex, byte x[]) throws SQLException"
title: "RowSet.setBytes"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setBytes

```java
void setBytes(int parameterIndex, byte x[]) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 to the given Java array of `byte` values. Before sending it to the
 database, the driver converts this to an SQL `VARBINARY` or
 `LONGVARBINARY` value, depending on the argument's size relative
 to the driver's limits on `VARBINARY` values.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the parameter value

**异常**

- **SQLException** — if a database access error occurs
