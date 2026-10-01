---
id: "java-en-function-hijrahera-of"
language: "java"
lang: "en"
category: "function"
name: "HijrahEra.of"
signature: "public static HijrahEra of(int hijrahEra)"
title: "HijrahEra.of"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/HijrahEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HijrahEra.of

```java
public static HijrahEra of(int hijrahEra)
```

Obtains an instance of `HijrahEra` from an `int` value.
 

 The current era, which is the only accepted value, has the value 1

**参数**

- **hijrahEra** — the era to represent, only 1 supported

**返回**

- the HijrahEra.AH singleton, not null

**异常**

- **DateTimeException** — if the value is invalid
