---
id: "java-en-function-temporal-issupported"
language: "java"
lang: "en"
category: "function"
name: "Temporal.isSupported"
signature: "boolean isSupported(TemporalUnit unit)"
title: "Temporal.isSupported"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/Temporal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Temporal.isSupported

```java
boolean isSupported(TemporalUnit unit)
```

Checks if the specified unit is supported.
 

 This checks if the specified unit can be added to, or subtracted from, this date-time.
 If false, then calling the `plus` and
 `minus(long, TemporalUnit) minus` methods will throw an exception.

 Implementations must check and handle all units defined in `ChronoUnit`.
 If the unit is supported, then true must be returned, otherwise false must be returned.
 

 If the field is not a `ChronoUnit`, then the result of this method
 is obtained by invoking `TemporalUnit.isSupportedBy(Temporal)`
 passing `this` as the argument.
 

 Implementations must ensure that no observable state is altered when this
 read-only method is invoked.

**参数**

- **unit** — the unit to check, null returns false

**返回**

- true if the unit can be added/subtracted, false if not
