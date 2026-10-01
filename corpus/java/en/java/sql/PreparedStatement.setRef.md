---
id: "java-en-function-preparedstatement-setref"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setRef"
signature: "void setRef (int parameterIndex, Ref x) throws SQLException"
title: "PreparedStatement.setRef"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setRef

```java
void setRef (int parameterIndex, Ref x) throws SQLException
```

Sets the designated parameter to the given
  `REF()` value.
 The driver converts this to an SQL `REF` value when it
 sends it to the database.

**参数**

- **parameterIndex** — the first parameter is 1, the second is 2, ...
- **x** — an SQL `REF` value

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if a database access error occurs or this method is called on a closed `PreparedStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
