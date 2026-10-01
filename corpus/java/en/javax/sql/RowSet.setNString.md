---
id: "java-en-function-rowset-setnstring"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setNString"
signature: "void setNString(int parameterIndex, String value) throws SQLException"
title: "RowSet.setNString"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setNString

```java
void setNString(int parameterIndex, String value) throws SQLException
```

Sets the designated parameter to the given `String` object.
 The driver converts this to a SQL `NCHAR` or
 `NVARCHAR` or `LONGNVARCHAR` value
 (depending on the argument's
 size relative to the driver's limits on `NVARCHAR` values)
 when it sends it to the database.

**参数**

- **parameterIndex** — of the first parameter is 1, the second is 2, ...
- **value** — the parameter value

**异常**

- **SQLException** — if the driver does not support national character sets;  if the driver can detect that a data conversion error could occur ; or if a database access error occurs

> *Since 1.6*
