---
id: "java-en-function-temporaladjusters-ofdateadjuster"
language: "java"
lang: "en"
category: "function"
name: "TemporalAdjusters.ofDateAdjuster"
signature: "public static TemporalAdjuster ofDateAdjuster(UnaryOperator<LocalDate> dateBasedAdjuster)"
title: "TemporalAdjusters.ofDateAdjuster"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAdjusters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAdjusters.ofDateAdjuster

```java
public static TemporalAdjuster ofDateAdjuster(UnaryOperator<LocalDate> dateBasedAdjuster)
```

Obtains a `TemporalAdjuster` that wraps a date adjuster.
 

 The `TemporalAdjuster` is based on the low level `Temporal` interface.
 This method allows an adjustment from `LocalDate` to `LocalDate`
 to be wrapped to match the temporal-based interface.
 This is provided for convenience to make user-written adjusters simpler.
 

 In general, user-written adjusters should be static constants:
 
```
`static TemporalAdjuster TWO_DAYS_LATER =
       TemporalAdjusters.ofDateAdjuster(date -> date.plusDays(2));
 `
```

**参数**

- **dateBasedAdjuster** — the date-based adjuster, not null

**返回**

- the temporal adjuster wrapping on the date adjuster, not null
