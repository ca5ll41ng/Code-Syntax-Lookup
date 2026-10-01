---
id: "java-en-function-timestamp-compareto"
language: "java"
lang: "en"
category: "function"
name: "Timestamp.compareTo"
signature: "public int compareTo(Timestamp ts)"
title: "Timestamp.compareTo"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Timestamp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timestamp.compareTo

```java
public int compareTo(Timestamp ts)
```

Compares this `Timestamp` object to the given
 `Timestamp` object.

**参数**

- **ts** — the `Timestamp` object to be compared to this `Timestamp` object

**返回**

- the value `0` if the two `Timestamp` objects are equal; a value less than `0` if this `Timestamp` object is before the given argument; and a value greater than `0` if this `Timestamp` object is after the given argument.

> *Since 1.4*
