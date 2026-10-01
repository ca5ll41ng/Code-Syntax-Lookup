---
id: "java-en-function-clob-getsubstring"
language: "java"
lang: "en"
category: "function"
name: "Clob.getSubString"
signature: "String getSubString(long pos, int length) throws SQLException"
title: "Clob.getSubString"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob.getSubString

```java
String getSubString(long pos, int length) throws SQLException
```

Retrieves a copy of the specified substring
 in the `CLOB` value
 designated by this `Clob` object.
 The substring begins at position
 `pos` and has up to `length` consecutive
 characters.

**参数**

- **pos** — the first character of the substring to be extracted. The first character is at position 1.
- **length** — the number of consecutive characters to be copied; the value for length must be 0 or greater

**返回**

- a `String` that is the specified substring in the `CLOB` value designated by this `Clob` object

**异常**

- **SQLException** — if there is an error accessing the `CLOB` value; if pos is less than 1 or length is less than 0
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
