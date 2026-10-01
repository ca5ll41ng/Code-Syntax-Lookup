---
id: "java-en-function-connection-gettransactionisolation"
language: "java"
lang: "en"
category: "function"
name: "Connection.getTransactionIsolation"
signature: "int getTransactionIsolation() throws SQLException"
title: "Connection.getTransactionIsolation"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.getTransactionIsolation

```java
int getTransactionIsolation() throws SQLException
```

Retrieves this `Connection` object's current
 transaction isolation level.

**返回**

- the current transaction isolation level, which will be one of the following constants: `Connection.TRANSACTION_READ_UNCOMMITTED`, `Connection.TRANSACTION_READ_COMMITTED`, `Connection.TRANSACTION_REPEATABLE_READ`, `Connection.TRANSACTION_SERIALIZABLE`, or `Connection.TRANSACTION_NONE`.

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed connection

**参见**

- #setTransactionIsolation
