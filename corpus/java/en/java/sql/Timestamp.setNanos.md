---
id: "java-en-function-timestamp-setnanos"
language: "java"
lang: "en"
category: "function"
name: "Timestamp.setNanos"
signature: "public void setNanos(int n)"
title: "Timestamp.setNanos"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Timestamp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timestamp.setNanos

```java
public void setNanos(int n)
```

Sets this `Timestamp` object's `nanos` field
 to the given value.

**参数**

- **n** — the new fractional seconds component

**异常**

- **java.lang.IllegalArgumentException** — if the given argument is greater than 999999999 or less than 0

**参见**

- #getNanos
