---
id: "java-en-function-date-valueof"
language: "java"
lang: "en"
category: "function"
name: "Date.valueOf"
signature: "public static Date valueOf(String s)"
title: "Date.valueOf"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.valueOf

```java
public static Date valueOf(String s)
```

Converts a string in JDBC date escape format to
 a `Date` value.

**参数**

- **s** — a `String` object representing a date in in the format "yyyy-[m]m-[d]d". The leading zero for `mm` and `dd` may also be omitted.

**返回**

- a `java.sql.Date` object representing the given date

**异常**

- **IllegalArgumentException** — if the date given is not in the JDBC date escape format (yyyy-[m]m-[d]d)
