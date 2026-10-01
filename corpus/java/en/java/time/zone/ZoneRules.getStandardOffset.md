---
id: "java-en-function-zonerules-getstandardoffset"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.getStandardOffset"
signature: "public ZoneOffset getStandardOffset(Instant instant)"
title: "ZoneRules.getStandardOffset"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.getStandardOffset

```java
public ZoneOffset getStandardOffset(Instant instant)
```

Gets the standard offset for the specified instant in this zone.
 

 This provides access to historic information on how the standard offset
 has changed over time.
 The standard offset is the offset before any daylight saving time is applied.
 This is typically the offset applicable during winter.

**参数**

- **instant** — the instant to find the offset information for, not null, but null may be ignored if the rules have a single offset for all instants

**返回**

- the standard offset, not null
