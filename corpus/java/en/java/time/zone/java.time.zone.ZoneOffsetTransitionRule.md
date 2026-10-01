---
id: "java-en-function-java-time-zone-zoneoffsettransitionrule"
language: "java"
lang: "en"
category: "function"
name: "java.time.zone.ZoneOffsetTransitionRule"
title: "ZoneOffsetTransitionRule"
directive: "type"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransitionRule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransitionRule

A rule expressing how to create a transition.
 

 This class allows rules for identifying future transitions to be expressed.
 A rule might be written in many forms:
 
 
- the 16th March
 
- the Sunday on or after the 16th March
 
- the Sunday on or before the 16th March
 
- the last Sunday in February
 

 These different rule types can be expressed and queried.

 This class is immutable and thread-safe.

> *Since 1.8*
