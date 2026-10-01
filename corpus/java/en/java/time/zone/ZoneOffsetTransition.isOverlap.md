---
id: "java-en-function-zoneoffsettransition-isoverlap"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransition.isOverlap"
signature: "public boolean isOverlap()"
title: "ZoneOffsetTransition.isOverlap"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransition.isOverlap

```java
public boolean isOverlap()
```

Does this transition represent an overlap in the local time-line.
 

 Overlaps occur where there are local date-times that exist twice.
 An example would be when the offset changes from `+02:00` to `+01:00`.
 This might be described as 'the clocks will move back one hour tonight at 2am'.

**返回**

- true if this transition is an overlap, false if it is a gap
