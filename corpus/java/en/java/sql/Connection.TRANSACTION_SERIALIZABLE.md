---
id: "java-en-function-connection-transaction_serializable"
language: "java"
lang: "en"
category: "function"
name: "Connection.TRANSACTION_SERIALIZABLE"
signature: "int TRANSACTION_SERIALIZABLE = 8"
title: "Connection.TRANSACTION_SERIALIZABLE"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Connection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Connection.TRANSACTION_SERIALIZABLE

```java
int TRANSACTION_SERIALIZABLE = 8
```

A constant indicating that
 dirty reads, non-repeatable reads and phantom reads are prevented.
 This level includes the prohibitions in
 `TRANSACTION_REPEATABLE_READ` and further prohibits the
 situation where one transaction reads all rows that satisfy
 a `WHERE` condition, a second transaction inserts a row that
 satisfies that `WHERE` condition, and the first transaction
 rereads for the same condition, retrieving the additional
 "phantom" row in the second read.
