---
id: "java-en-function-connection-transaction_read_uncommitted"
language: "java"
lang: "en"
category: "function"
name: "Connection.TRANSACTION_READ_UNCOMMITTED"
signature: "int TRANSACTION_READ_UNCOMMITTED = 1"
title: "Connection.TRANSACTION_READ_UNCOMMITTED"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.TRANSACTION_READ_UNCOMMITTED

```java
int TRANSACTION_READ_UNCOMMITTED = 1
```

A constant indicating that
 dirty reads, non-repeatable reads and phantom reads can occur.
 This level allows a row changed by one transaction to be read
 by another transaction before any changes in that row have been
 committed (a "dirty read").  If any of the changes are rolled back,
 the second transaction will have retrieved an invalid row.
