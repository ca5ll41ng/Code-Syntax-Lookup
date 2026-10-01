---
id: "java-en-function-rowset-settransactionisolation"
language: "java"
lang: "en"
category: "function"
name: "RowSet.setTransactionIsolation"
signature: "void setTransactionIsolation(int level) throws SQLException"
title: "RowSet.setTransactionIsolation"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.setTransactionIsolation

```java
void setTransactionIsolation(int level) throws SQLException
```

Sets the transaction isolation level for this `RowSet` object.

**参数**

- **level** — the transaction isolation level; one of `Connection.TRANSACTION_READ_UNCOMMITTED`, `Connection.TRANSACTION_READ_COMMITTED`, `Connection.TRANSACTION_REPEATABLE_READ`, or `Connection.TRANSACTION_SERIALIZABLE`

**异常**

- **SQLException** — if a database access error occurs

**参见**

- #getTransactionIsolation
