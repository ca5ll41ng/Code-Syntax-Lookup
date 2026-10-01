---
id: "java-en-function-connection-transaction_read_committed"
language: "java"
lang: "en"
category: "function"
name: "Connection.TRANSACTION_READ_COMMITTED"
signature: "int TRANSACTION_READ_COMMITTED = 2"
title: "Connection.TRANSACTION_READ_COMMITTED"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.TRANSACTION_READ_COMMITTED

```java
int TRANSACTION_READ_COMMITTED = 2
```

A constant indicating that
 dirty reads are prevented; non-repeatable reads and phantom
 reads can occur.  This level only prohibits a transaction
 from reading a row with uncommitted changes in it.
