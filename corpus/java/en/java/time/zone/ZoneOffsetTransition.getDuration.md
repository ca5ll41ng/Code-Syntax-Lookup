---
id: "java-en-function-zoneoffsettransition-getduration"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransition.getDuration"
signature: "public Duration getDuration()"
title: "ZoneOffsetTransition.getDuration"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransition.getDuration

```java
public Duration getDuration()
```

Gets the duration of the transition.
 

 In most cases, the transition duration is one hour, however this is not always the case.
 The duration will be positive for a gap and negative for an overlap.
 Time-zones are second-based, so the nanosecond part of the duration will be zero.

**返回**

- the duration of the transition, positive for gaps, negative for overlaps
