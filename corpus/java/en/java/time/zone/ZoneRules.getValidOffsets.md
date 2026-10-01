---
id: "java-en-function-zonerules-getvalidoffsets"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.getValidOffsets"
signature: "public List<ZoneOffset> getValidOffsets(LocalDateTime localDateTime)"
title: "ZoneRules.getValidOffsets"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.getValidOffsets

```java
public List<ZoneOffset> getValidOffsets(LocalDateTime localDateTime)
```

Gets the offset applicable at the specified local date-time in these rules.
 

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
 

 Thus, for any given local date-time there can be zero, one or two valid offsets.
 This method returns that list of valid offsets, which is a list of size 0, 1 or 2.
 In the case where there are two offsets, the earlier offset is returned at index 0
 and the later offset at index 1.
 

 There are various ways to handle the conversion from a `LocalDateTime`.
 One technique, using this method, would be:
 
```

  List&lt;ZoneOffset&gt; validOffsets = rules.getValidOffsets(localDT);
  if (validOffsets.size() == 1) {
    // Normal case: only one valid offset
    zoneOffset = validOffsets.get(0);
  } else {
    // Gap or Overlap: determine what to do from transition (which will be non-null)
    ZoneOffsetTransition trans = rules.getTransition(localDT);
  }
 
```

 

 In theory, it is possible for there to be more than two valid offsets.
 This would happen if clocks to be put back more than once in quick succession.
 This has never happened in the history of time-zones and thus has no special handling.
 However, if it were to happen, then the list would return more than 2 entries.

**参数**

- **localDateTime** — the local date-time to query for valid offsets, not null, but null may be ignored if the rules have a single offset for all instants

**返回**

- the list of valid offsets, may be immutable, not null
