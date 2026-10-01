---
id: "java-en-function-rowset-gettransactionisolation"
language: "java"
lang: "en"
category: "function"
name: "RowSet.getTransactionIsolation"
signature: "int getTransactionIsolation()"
title: "RowSet.getTransactionIsolation"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.getTransactionIsolation

```java
int getTransactionIsolation()
```

Retrieves the transaction isolation level set for this
 `RowSet` object.

**返回**

- the transaction isolation level; one of `Connection.TRANSACTION_READ_UNCOMMITTED`, `Connection.TRANSACTION_READ_COMMITTED`, `Connection.TRANSACTION_REPEATABLE_READ`, or `Connection.TRANSACTION_SERIALIZABLE`

**参见**

- #setTransactionIsolation
