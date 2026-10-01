---
id: "java-en-function-zonerules-gettransitionrules"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.getTransitionRules"
signature: "public List<ZoneOffsetTransitionRule> getTransitionRules()"
title: "ZoneRules.getTransitionRules"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.getTransitionRules

```java
public List<ZoneOffsetTransitionRule> getTransitionRules()
```

Gets the list of transition rules for years beyond those defined in the transition list.
 

 The complete set of transitions for this rules instance is defined by this method
 and `getTransitions`. This method returns instances of `ZoneOffsetTransitionRule`
 that define an algorithm for when transitions will occur.
 

 For any given `ZoneRules`, this list contains the transition rules for years
 beyond those years that have been fully defined. These rules typically refer to future
 daylight saving time rule changes.
 

 If the zone defines daylight savings into the future, then the list will normally
 be of size two and hold information about entering and exiting daylight savings.
 If the zone does not have daylight savings, or information about future changes
 is uncertain, then the list will be empty.
 

 The list will be empty for fixed offset rules and for any time-zone where there is no
 daylight saving time. The list will also be empty if the transition rules are unknown.

**返回**

- an immutable list of transition rules, not null
