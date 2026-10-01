---
id: "java-en-function-sqlinput-readref"
language: "java"
lang: "en"
category: "function"
name: "SQLInput.readRef"
signature: "Ref readRef() throws SQLException"
title: "SQLInput.readRef"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput.readRef

```java
Ref readRef() throws SQLException
```

Reads an SQL `REF` value from the stream and returns it as a
 `Ref` object in the Java programming language.

**返回**

- a `Ref` object representing the SQL `REF` value at the head of the stream; `null` if the value read is SQL `NULL`

**异常**

- **SQLException** — if a database access error occurs
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
