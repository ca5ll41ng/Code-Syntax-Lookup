---
id: "java-en-function-zonerules-gettransition"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.getTransition"
signature: "public ZoneOffsetTransition getTransition(LocalDateTime localDateTime)"
title: "ZoneRules.getTransition"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.getTransition

```java
public ZoneOffsetTransition getTransition(LocalDateTime localDateTime)
```

Gets the offset transition applicable at the specified local date-time in these rules.
 

 The mapping from a local date-time to an offset is not straightforward.
 There are three cases:
 
 
- Normal, with one valid offset. For the vast majority of the year, the normal
  case applies, where there is a single valid offset for the local date-time.
 
- Gap, with zero valid offsets. This is when clocks jump forward typically
  due to the spring daylight savings change from "winter" to "summer".
  In a gap there are local date-time values with no valid offset.
 
- Overlap, with two valid offsets. This is when clocks are set back typically
  due to the autumn daylight savings change from "summer" to "winter".
  In an overlap there are local date-time values with two valid offsets.
 

 A transition is used to model the cases of a Gap or Overlap.
 The Normal case will return null.
 

 There are various ways to handle the conversion from a `LocalDateTime`.
 One technique, using this method, would be:
 
```

  ZoneOffsetTransition trans = rules.getTransition(localDT);
  if (trans != null) {
    // Gap or Overlap: determine what to do from transition
  } else {
    // Normal case: only one valid offset
    zoneOffset = rule.getOffset(localDT);
  }
 
```

**参数**

- **localDateTime** — the local date-time to query for offset transition, not null, but null may be ignored if the rules have a single offset for all instants

**返回**

- the offset transition, null if the local date-time is not in transition
