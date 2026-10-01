---
id: "java-en-function-timestamp-valueof"
language: "java"
lang: "en"
category: "function"
name: "Timestamp.valueOf"
signature: "public static Timestamp valueOf(String s)"
title: "Timestamp.valueOf"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Timestamp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timestamp.valueOf

```java
public static Timestamp valueOf(String s)
```

Converts a `String` object in JDBC timestamp escape format to a
 `Timestamp` value.

**参数**

- **s** — timestamp in format `yyyy-[m]m-[d]d hh:mm:ss[.f...]`.  The fractional seconds may be omitted. The leading zero for `mm` and `dd` may also be omitted.

**返回**

- corresponding `Timestamp` value

**异常**

- **java.lang.IllegalArgumentException** — if the given argument does not have the format `yyyy-[m]m-[d]d hh:mm:ss[.f...]`
