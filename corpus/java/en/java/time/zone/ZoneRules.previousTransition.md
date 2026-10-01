---
id: "java-en-function-zonerules-previoustransition"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.previousTransition"
signature: "public ZoneOffsetTransition previousTransition(Instant instant)"
title: "ZoneRules.previousTransition"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.previousTransition

```java
public ZoneOffsetTransition previousTransition(Instant instant)
```

Gets the previous transition before the specified instant.
 

 This returns details of the previous transition before the specified instant.
 For example, if the instant represents a point where "summer" daylight saving time
 applies, then the method will return the transition from the previous "winter" time.

**参数**

- **instant** — the instant to get the previous transition after, not null, but null may be ignored if the rules have a single offset for all instants

**返回**

- the previous transition before the specified instant, null if this is before the first transition
