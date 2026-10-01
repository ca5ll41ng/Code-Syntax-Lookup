---
id: "java-en-function-rowset-setncharacterstream"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setNCharacterStream"
signature: "void setNCharacterStream(int parameterIndex, Reader value) throws SQLException"
title: "RowSet.setNCharacterStream"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setNCharacterStream

```java
void setNCharacterStream(int parameterIndex, Reader value) throws SQLException
```

Sets the designated parameter in this `RowSet` object's command
 to a `Reader` object. The
 `Reader` reads the data till end-of-file is reached. The
 driver does the necessary conversion from Java character format to
 the national character set in the database.
 

**Note:** This stream object can either be a standard
 Java stream object or your own subclass that implements the
 standard interface.
 

**Note:** Consult your JDBC driver documentation to determine if
 it might be more efficient to use a version of
 `setNCharacterStream` which takes a length parameter.

**参数**

- **parameterIndex** — of the first parameter is 1, the second is 2, ...
- **value** — the parameter value

**异常**

- **SQLException** — if the driver does not support national character sets;  if the driver can detect that a data conversion error could occur ; if a database access error occurs; or this method is called on a closed `PreparedStatement`
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.6*
