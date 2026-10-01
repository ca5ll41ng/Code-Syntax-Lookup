---
id: "java-en-function-connection-createclob"
language: "java"
lang: "en"
category: "function"
name: "Connection.createClob"
signature: "Clob createClob() throws SQLException"
title: "Connection.createClob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.createClob

```java
Clob createClob() throws SQLException
```

Constructs an object that implements the `Clob` interface. The object
 returned initially contains no data.  The `setAsciiStream`,
 `setCharacterStream` and `setString` methods of
 the `Clob` interface may be used to add data to the `Clob`.

**返回**

- An object that implements the `Clob` interface

**异常**

- **SQLException** — if an object that implements the `Clob` interface can not be constructed, this method is called on a closed connection or a database access error occurs.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this data type

> *Since 1.6*
