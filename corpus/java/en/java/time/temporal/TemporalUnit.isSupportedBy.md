---
id: "java-en-function-temporalunit-issupportedby"
language: "java"
lang: "en"
category: "function"
name: "TemporalUnit.isSupportedBy"
signature: "default boolean isSupportedBy(Temporal temporal)"
title: "TemporalUnit.isSupportedBy"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalUnit.isSupportedBy

```java
default boolean isSupportedBy(Temporal temporal)
```

Checks if this unit is supported by the specified temporal object.
 

 This checks that the implementing date-time can add/subtract this unit.
 This can be used to avoid throwing an exception.
 

 This default implementation derives the value using
 `plus`.

**参数**

- **temporal** — the temporal object to check, not null

**返回**

- true if the unit is supported
