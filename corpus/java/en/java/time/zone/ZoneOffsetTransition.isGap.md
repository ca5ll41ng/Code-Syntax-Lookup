---
id: "java-en-function-zoneoffsettransition-isgap"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransition.isGap"
signature: "public boolean isGap()"
title: "ZoneOffsetTransition.isGap"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransition.isGap

```java
public boolean isGap()
```

Does this transition represent a gap in the local time-line.
 

 Gaps occur where there are local date-times that simply do not exist.
 An example would be when the offset changes from `+01:00` to `+02:00`.
 This might be described as 'the clocks will move forward one hour tonight at 1am'.

**返回**

- true if this transition is a gap, false if it is an overlap
