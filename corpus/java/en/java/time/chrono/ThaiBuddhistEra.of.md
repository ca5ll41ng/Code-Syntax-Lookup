---
id: "java-en-function-thaibuddhistera-of"
language: "java"
lang: "en"
category: "function"
name: "ThaiBuddhistEra.of"
signature: "public static ThaiBuddhistEra of(int thaiBuddhistEra)"
title: "ThaiBuddhistEra.of"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ThaiBuddhistEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThaiBuddhistEra.of

```java
public static ThaiBuddhistEra of(int thaiBuddhistEra)
```

Obtains an instance of `ThaiBuddhistEra` from an `int` value.
 

 `ThaiBuddhistEra` is an enum representing the Thai Buddhist eras of BEFORE_BE/BE.
 This factory allows the enum to be obtained from the `int` value.

**参数**

- **thaiBuddhistEra** — the era to represent, from 0 to 1

**返回**

- the BuddhistEra singleton, never null

**异常**

- **DateTimeException** — if the era is invalid
