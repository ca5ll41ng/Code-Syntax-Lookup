---
id: "java-en-function-clob-position"
language: "java"
lang: "en"
category: "function"
name: "Clob.position"
signature: "long position(String searchstr, long start) throws SQLException"
title: "Clob.position"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob.position

```java
long position(String searchstr, long start) throws SQLException
```

Retrieves the character position at which the specified substring
 `searchstr` appears in the SQL `CLOB` value
 represented by this `Clob` object.  The search
 begins at position `start`.

**参数**

- **searchstr** — the substring for which to search
- **start** — the position at which to begin searching; the first position is 1

**返回**

- the position at which the substring appears or -1 if it is not present; the first position is 1

**异常**

- **SQLException** — if there is an error accessing the `CLOB` value or if pos is less than 1
- **SQLFeatureNotSupportedException** — if the JDBC driver does not support this method

> *Since 1.2*
