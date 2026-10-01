---
id: "java-en-function-preparedstatement-setnclob"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setNClob"
signature: "void setNClob(int parameterIndex, NClob value) throws SQLException"
title: "PreparedStatement.setNClob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setNClob

```java
void setNClob(int parameterIndex, NClob value) throws SQLException
```

Sets the designated parameter to a `java.sql.NClob` object. The driver converts this to a
 SQL `NCLOB` value when it sends it to the database.

**参数**

- **parameterIndex** — of the first parameter is 1, the second is 2, ...
- **value** — the parameter value

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if the driver does not support national character sets;  if the driver can detect that a data conversion error could occur; if a database access error occurs; or this method is called on a closed `PreparedStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
