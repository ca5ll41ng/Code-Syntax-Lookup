---
id: "java-en-function-connection-createblob"
language: "java"
lang: "en"
category: "function"
name: "Connection.createBlob"
signature: "Blob createBlob() throws SQLException"
title: "Connection.createBlob"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.createBlob

```java
Blob createBlob() throws SQLException
```

Constructs an object that implements the `Blob` interface. The object
 returned initially contains no data.  The `setBinaryStream` and
 `setBytes` methods of the `Blob` interface may be used to add data to
 the `Blob`.

**返回**

- An object that implements the `Blob` interface

**异常**

- **SQLException** — if an object that implements the `Blob` interface can not be constructed, this method is called on a closed connection or a database access error occurs.
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this data type

> *Since 1.6*
