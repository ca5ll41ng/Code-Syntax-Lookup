---
id: "java-en-function-clob-setstring"
language: "java"
lang: "en"
category: "function"
name: "Clob.setString"
signature: "int setString(long pos, String str) throws SQLException"
title: "Clob.setString"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob.setString

```java
int setString(long pos, String str) throws SQLException
```

Writes the given Java `String` to the `CLOB`
 value that this `Clob` object designates at the position
 `pos`. The string will overwrite the existing characters
 in the `Clob` object starting at the position
 `pos`.  If the end of the `Clob` value is reached
 while writing the given string, then the length of the `Clob`
 value will be increased to accommodate the extra characters.
 

 **Note:** If the value specified for `pos`
 is greater than the length+1 of the `CLOB` value then the
 behavior is undefined. Some JDBC drivers may throw an
 `SQLException` while other drivers may support this
 operation.

**参数**

- **pos** — the position at which to start writing to the `CLOB` value that this `Clob` object represents; the first position is 1.
- **str** — the string to be written to the `CLOB` value that this `Clob` designates

**返回**

- the number of characters written

**异常**

- **SQLException** — if there is an error accessing the `CLOB` value or if pos is less than 1
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.4*
