---
id: "java-en-function-zonerules-gettransitions"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.getTransitions"
signature: "public List<ZoneOffsetTransition> getTransitions()"
title: "ZoneRules.getTransitions"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.getTransitions

```java
public List<ZoneOffsetTransition> getTransitions()
```

Gets the complete list of fully defined transitions.
 

 The complete set of transitions for this rules instance is defined by this method
 and `getTransitionRules`. This method returns those transitions that have
 been fully defined. These are typically historical, but may be in the future.
 

 The list will be empty for fixed offset rules and for any time-zone where there has
 only ever been a single offset. The list will also be empty if the transition rules are unknown.

**返回**

- an immutable list of fully defined transitions, not null
