---
id: "java-en-function-zonerules-isdaylightsavings"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.isDaylightSavings"
signature: "public boolean isDaylightSavings(Instant instant)"
title: "ZoneRules.isDaylightSavings"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.isDaylightSavings

```java
public boolean isDaylightSavings(Instant instant)
```

Checks if the specified instant is in daylight savings.
 

 This checks if the standard offset and the actual offset are the same
 for the specified instant.
 If they are not, it is assumed that daylight savings is in operation.
 

 This default implementation compares the `getOffset(java.time.Instant) actual`
 and `getStandardOffset(java.time.Instant) standard` offsets.

**参数**

- **instant** — the instant to check the daylight savings for, not null, but null may be ignored if the rules have a single offset for all instants

**返回**

- true if the specified instant is in daylight savings, false otherwise.
