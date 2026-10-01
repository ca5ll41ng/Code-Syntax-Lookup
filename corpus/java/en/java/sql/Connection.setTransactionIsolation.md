---
id: "java-en-function-connection-settransactionisolation"
language: "java"
lang: "en"
category: "function"
name: "Connection.setTransactionIsolation"
signature: "void setTransactionIsolation(int level) throws SQLException"
title: "Connection.setTransactionIsolation"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.setTransactionIsolation

```java
void setTransactionIsolation(int level) throws SQLException
```

Attempts to change the transaction isolation level for this
 `Connection` object to the one given.
 The constants defined in the interface `Connection`
 are the possible transaction isolation levels.
 

 **Note:** If this method is called during a transaction, the result
 is implementation-defined.

**参数**

- **level** — one of the following `Connection` constants: `Connection.TRANSACTION_READ_UNCOMMITTED`, `Connection.TRANSACTION_READ_COMMITTED`, `Connection.TRANSACTION_REPEATABLE_READ`, or `Connection.TRANSACTION_SERIALIZABLE`. (Note that `Connection.TRANSACTION_NONE` cannot be used because it specifies that transactions are not supported.)

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed connection or the given parameter is not one of the `Connection` constants

**参见**

- DatabaseMetaData#supportsTransactionIsolationLevel
- #getTransactionIsolation
