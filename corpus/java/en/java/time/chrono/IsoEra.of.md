---
id: "java-en-function-isoera-of"
language: "java"
lang: "en"
category: "function"
name: "IsoEra.of"
signature: "public static IsoEra of(int isoEra)"
title: "IsoEra.of"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/IsoEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoEra.of

```java
public static IsoEra of(int isoEra)
```

Obtains an instance of `IsoEra` from an `int` value.
 

 `IsoEra` is an enum representing the ISO eras of BCE/CE.
 This factory allows the enum to be obtained from the `int` value.

**参数**

- **isoEra** — the BCE/CE value to represent, from 0 (BCE) to 1 (CE)

**返回**

- the era singleton, not null

**异常**

- **DateTimeException** — if the value is invalid
