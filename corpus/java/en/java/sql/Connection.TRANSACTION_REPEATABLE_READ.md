---
id: "java-en-function-connection-transaction_repeatable_read"
language: "java"
lang: "en"
category: "function"
name: "Connection.TRANSACTION_REPEATABLE_READ"
signature: "int TRANSACTION_REPEATABLE_READ = 4"
title: "Connection.TRANSACTION_REPEATABLE_READ"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.TRANSACTION_REPEATABLE_READ

```java
int TRANSACTION_REPEATABLE_READ = 4
```

A constant indicating that
 dirty reads and non-repeatable reads are prevented; phantom
 reads can occur.  This level prohibits a transaction from
 reading a row with uncommitted changes in it, and it also
 prohibits the situation where one transaction reads a row,
 a second transaction alters the row, and the first transaction
 rereads the row, getting different values the second time
 (a "non-repeatable read").
