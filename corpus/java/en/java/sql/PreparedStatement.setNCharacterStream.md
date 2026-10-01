---
id: "java-en-function-preparedstatement-setncharacterstream"
language: "java"
lang: "en"
category: "function"
name: "PreparedStatement.setNCharacterStream"
signature: "void setNCharacterStream(int parameterIndex, Reader value, long length) throws SQLException"
title: "PreparedStatement.setNCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/PreparedStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PreparedStatement.setNCharacterStream

```java
void setNCharacterStream(int parameterIndex, Reader value, long length) throws SQLException
```

Sets the designated parameter to a `Reader` object. The
 `Reader` reads the data till end-of-file is reached. The
 driver does the necessary conversion from Java character format to
 the national character set in the database.

**参数**

- **parameterIndex** — of the first parameter is 1, the second is 2, ...
- **value** — the parameter value
- **length** — the number of characters in the parameter data.

**异常**

- **SQLException** — if parameterIndex does not correspond to a parameter marker in the SQL statement; if the driver does not support national character sets;  if the driver can detect that a data conversion error could occur; if a database access error occurs; or this method is called on a closed `PreparedStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
