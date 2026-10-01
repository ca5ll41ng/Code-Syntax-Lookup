---
id: "java-en-function-minguoera-of"
language: "java"
lang: "en"
category: "function"
name: "MinguoEra.of"
signature: "public static MinguoEra of(int minguoEra)"
title: "MinguoEra.of"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/MinguoEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MinguoEra.of

```java
public static MinguoEra of(int minguoEra)
```

Obtains an instance of `MinguoEra` from an `int` value.
 

 `MinguoEra` is an enum representing the Minguo eras of BEFORE_ROC/ROC.
 This factory allows the enum to be obtained from the `int` value.

**参数**

- **minguoEra** — the BEFORE_ROC/ROC value to represent, from 0 (BEFORE_ROC) to 1 (ROC)

**返回**

- the era singleton, not null

**异常**

- **DateTimeException** — if the value is invalid
