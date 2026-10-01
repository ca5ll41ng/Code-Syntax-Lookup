---
id: "java-en-function-java-time-zone-zonerules"
language: "java"
lang: "en"
category: "function"
name: "java.time.zone.ZoneRules"
title: "ZoneRules"
directive: "type"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules

The rules defining how the zone offset varies for a single time-zone.
 

 The rules model all the historic and future transitions for a time-zone.
 `ZoneOffsetTransition` is used for known transitions, typically historic.
 `ZoneOffsetTransitionRule` is used for future transitions that are based
 on the result of an algorithm.
 

 The rules are loaded via `ZoneRulesProvider` using a `ZoneId`.
 The same rules may be shared internally between multiple zone IDs.
 

 Serializing an instance of `ZoneRules` will store the entire set of rules.
 It does not store the zone ID as it is not part of the state of this object.
 

 A rule implementation may or may not store full information about historic
 and future transitions, and the information stored is only as accurate as
 that supplied to the implementation by the rules provider.
 Applications should treat the data provided as representing the best information
 available to the implementation of this rule.

 This class is immutable and thread-safe.

> *Since 1.8*
