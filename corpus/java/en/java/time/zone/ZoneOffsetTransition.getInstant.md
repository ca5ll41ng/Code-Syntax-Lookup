---
id: "java-en-function-zoneoffsettransition-getinstant"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransition.getInstant"
signature: "public Instant getInstant()"
title: "ZoneOffsetTransition.getInstant"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransition.getInstant

```java
public Instant getInstant()
```

Gets the transition instant.
 

 This is the instant of the discontinuity, which is defined as the first
 instant that the 'after' offset applies.
 

 The methods `getInstant`, `getDateTimeBefore` and `getDateTimeAfter`
 all represent the same instant.

**返回**

- the transition instant, not null
