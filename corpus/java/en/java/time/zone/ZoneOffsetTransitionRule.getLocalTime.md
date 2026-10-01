---
id: "java-en-function-zoneoffsettransitionrule-getlocaltime"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransitionRule.getLocalTime"
signature: "public LocalTime getLocalTime()"
title: "ZoneOffsetTransitionRule.getLocalTime"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransitionRule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransitionRule.getLocalTime

```java
public LocalTime getLocalTime()
```

Gets the local time of day of the transition which must be checked with
 `isMidnightEndOfDay`.
 

 The time is converted into an instant using the time definition.

**返回**

- the local time of day of the transition, not null
