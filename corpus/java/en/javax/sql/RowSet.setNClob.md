---
id: "java-en-function-rowset-setnclob"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setNClob"
signature: "void setNClob(String parameterName, NClob value) throws SQLException"
title: "RowSet.setNClob"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setNClob

```java
void setNClob(String parameterName, NClob value) throws SQLException
```

Sets the designated parameter to a `java.sql.NClob` object. The object
 implements the `java.sql.NClob` interface. This `NClob`
 object maps to a SQL `NCLOB`.

**参数**

- **parameterName** — the name of the column to be set
- **value** — the parameter value

**异常**

- **SQLException** — if the driver does not support national character sets;  if the driver can detect that a data conversion error could occur; or if a database access error occurs

> *Since 1.6*
