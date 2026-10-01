---
id: "java-en-function-connection-isvalid"
language: "java"
lang: "en"
category: "function"
name: "Connection.isValid"
signature: "boolean isValid(int timeout) throws SQLException"
title: "Connection.isValid"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.isValid

```java
boolean isValid(int timeout) throws SQLException
```

Returns true if the connection has not been closed and is still valid.
 The driver shall submit a query on the connection or use some other
 mechanism that positively verifies the connection is still valid when
 this method is called.
 

 The query submitted by the driver to validate the connection shall be
 executed in the context of the current transaction.

**参数**

- **timeout** — The time in seconds to wait for the database operation used to validate the connection to complete.  If the timeout period expires before the operationcompletes, this method returns false.  A value of 0 indicates a timeout is not applied to the database operation.

**返回**

- true if the connection is valid, false otherwise

**异常**

- **SQLException** — if the value supplied for `timeout` is less than 0

**参见**

- java.sql.DatabaseMetaData#getClientInfoProperties

> *Since 1.6*
