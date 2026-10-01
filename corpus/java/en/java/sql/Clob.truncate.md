---
id: "java-en-function-clob-truncate"
language: "java"
lang: "en"
category: "function"
name: "Clob.truncate"
signature: "void truncate(long len) throws SQLException"
title: "Clob.truncate"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob.truncate

```java
void truncate(long len) throws SQLException
```

Truncates the `CLOB` value that this `Clob`
 designates to have a length of `len`
 characters.
 

 **Note:** If the value specified for `pos`
 is greater than the length+1 of the `CLOB` value then the
 behavior is undefined. Some JDBC drivers may throw an
 `SQLException` while other drivers may support this
 operation.

**参数**

- **len** — the length, in characters, to which the `CLOB` value should be truncated

**异常**

- **SQLException** — if there is an error accessing the `CLOB` value or if len is less than 0
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
