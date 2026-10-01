---
id: "java-en-function-zoneoffsettransition-compareto"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransition.compareTo"
signature: "public int compareTo(ZoneOffsetTransition otherTransition)"
title: "ZoneOffsetTransition.compareTo"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransition.compareTo

```java
public int compareTo(ZoneOffsetTransition otherTransition)
```

Compares this transition to another based on the transition instant.
 

 This compares the instants of each transition.
 The offsets are ignored, making this order inconsistent with equals.

**参数**

- **otherTransition** — the transition to compare to, not null

**返回**

- the comparator value, that is the comparison of this transition instant with `otherTransition` instant
