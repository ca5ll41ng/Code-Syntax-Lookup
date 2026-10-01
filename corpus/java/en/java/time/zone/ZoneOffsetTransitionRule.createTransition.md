---
id: "java-en-function-zoneoffsettransitionrule-createtransition"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransitionRule.createTransition"
signature: "public ZoneOffsetTransition createTransition(int year)"
title: "ZoneOffsetTransitionRule.createTransition"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransitionRule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransitionRule.createTransition

```java
public ZoneOffsetTransition createTransition(int year)
```

Creates a transition instance for the specified year.
 

 Calculations are performed using the ISO-8601 chronology.

**参数**

- **year** — the year to create a transition for, not null

**返回**

- the transition instance, not null
