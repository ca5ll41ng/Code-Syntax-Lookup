---
id: "java-en-function-zonerules-nexttransition"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.nextTransition"
signature: "public ZoneOffsetTransition nextTransition(Instant instant)"
title: "ZoneRules.nextTransition"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.nextTransition

```java
public ZoneOffsetTransition nextTransition(Instant instant)
```

Gets the next transition after the specified instant.
 

 This returns details of the next transition after the specified instant.
 For example, if the instant represents a point where "Summer" daylight savings time
 applies, then the method will return the transition to the next "Winter" time.

**参数**

- **instant** — the instant to get the next transition after, not null, but null may be ignored if the rules have a single offset for all instants

**返回**

- the next transition after the specified instant, null if this is after the last transition
