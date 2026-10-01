---
id: "java-en-function-zonerules-getdaylightsavings"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.getDaylightSavings"
signature: "public Duration getDaylightSavings(Instant instant)"
title: "ZoneRules.getDaylightSavings"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.getDaylightSavings

```java
public Duration getDaylightSavings(Instant instant)
```

Gets the amount of daylight savings in use for the specified instant in this zone.
 

 This provides access to historic information on how the amount of daylight
 savings has changed over time.
 This is the difference between the standard offset and the actual offset.
 Typically the amount is zero during winter and one hour during summer.
 Time-zones are second-based, so the nanosecond part of the duration will be zero.
 

 This default implementation calculates the duration from the
 `getOffset(java.time.Instant) actual` and
 `getStandardOffset(java.time.Instant) standard` offsets.

**参数**

- **instant** — the instant to find the daylight savings for, not null, but null may be ignored if the rules have a single offset for all instants

**返回**

- the difference between the standard and actual offset, not null
