---
id: "java-en-function-zoneoffsettransition-of"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransition.of"
signature: "public static ZoneOffsetTransition of(LocalDateTime transition, ZoneOffset offsetBefore, ZoneOffset offsetAfter)"
title: "ZoneOffsetTransition.of"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransition.of

```java
public static ZoneOffsetTransition of(LocalDateTime transition, ZoneOffset offsetBefore, ZoneOffset offsetAfter)
```

Obtains an instance defining a transition between two offsets.
 

 Applications should normally obtain an instance from `ZoneRules`.
 This factory is only intended for use when creating `ZoneRules`.

**参数**

- **transition** — the transition date-time at the transition, which never actually occurs, expressed local to the before offset, not null
- **offsetBefore** — the offset before the transition, not null
- **offsetAfter** — the offset at and after the transition, not null

**返回**

- the transition, not null

**异常**

- **IllegalArgumentException** — if `offsetBefore` and `offsetAfter` are equal, or `transition.getNano()` returns non-zero value
