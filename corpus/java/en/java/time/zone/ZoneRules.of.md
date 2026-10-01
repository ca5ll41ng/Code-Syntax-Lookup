---
id: "java-en-function-zonerules-of"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.of"
signature: "public static ZoneRules of(ZoneOffset baseStandardOffset, ZoneOffset baseWallOffset, List<ZoneOffsetTransition> standardOffsetTransitionList, List<ZoneOffsetTransition> transitionList, List<ZoneOffsetTransitionRule> lastRules)"
title: "ZoneRules.of"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.of

```java
public static ZoneRules of(ZoneOffset baseStandardOffset, ZoneOffset baseWallOffset, List<ZoneOffsetTransition> standardOffsetTransitionList, List<ZoneOffsetTransition> transitionList, List<ZoneOffsetTransitionRule> lastRules)
```

Obtains an instance of a ZoneRules.

**参数**

- **baseStandardOffset** — the standard offset to use before legal rules were set, not null
- **baseWallOffset** — the wall offset to use before legal rules were set, not null
- **standardOffsetTransitionList** — the list of changes to the standard offset, not null
- **transitionList** — the list of transitions, not null
- **lastRules** — the recurring last rules, size 16 or less, not null

**返回**

- the zone rules, not null
