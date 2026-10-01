---
id: "java-en-function-callablestatement-setncharacterstream"
language: "java"
lang: "en"
category: "function"
name: "CallableStatement.setNCharacterStream"
signature: "void setNCharacterStream(String parameterName, Reader value, long length) throws SQLException"
title: "CallableStatement.setNCharacterStream"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/CallableStatement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallableStatement.setNCharacterStream

```java
void setNCharacterStream(String parameterName, Reader value, long length) throws SQLException
```

Sets the designated parameter to a `Reader` object. The
 `Reader` reads the data till end-of-file is reached. The
 driver does the necessary conversion from Java character format to
 the national character set in the database.

**参数**

- **parameterName** — the name of the parameter to be set
- **value** — the parameter value
- **length** — the number of characters in the parameter data.

**异常**

- **SQLException** — if parameterName does not correspond to a named parameter; if the driver does not support national character sets;  if the driver can detect that a data conversion error could occur; if a database access error occurs or this method is called on a closed `CallableStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
