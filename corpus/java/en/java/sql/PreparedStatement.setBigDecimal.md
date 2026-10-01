---
id: "java-en-function-preparedstatement-setbigdecimal"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setBigDecimal"
signature: "void setBigDecimal(int parameterIndex, BigDecimal x) throws SQLException"
title: "PreparedStatement.setBigDecimal"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setBigDecimal

```java
void setBigDecimal(int parameterIndex, BigDecimal x) throws SQLException
```

Sets the designated parameter to the given `java.math.BigDecimal` value.
 The driver converts this to an SQL `NUMERIC` value when
 it sends it to the database.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — the parameter value

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if a database access error occurs or this method is called on a closed `PreparedStatement`
