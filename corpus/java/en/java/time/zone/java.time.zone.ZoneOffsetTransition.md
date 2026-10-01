---
id: "java-en-function-java-time-zone-zoneoffsettransition"
language: "java"
lang: "en"
category: "function"
name: "java.time.zone.ZoneOffsetTransition"
title: "ZoneOffsetTransition"
directive: "type"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransition

A transition between two offsets caused by a discontinuity in the local time-line.
 

 A transition between two offsets is normally the result of a daylight savings cutover.
 The discontinuity is normally a gap in spring and an overlap in autumn.
 `ZoneOffsetTransition` models the transition between the two offsets.
 

 Gaps occur where there are local date-times that simply do not exist.
 An example would be when the offset changes from `+03:00` to `+04:00`.
 This might be described as 'the clocks will move forward one hour tonight at 1am'.
 

 Overlaps occur where there are local date-times that exist twice.
 An example would be when the offset changes from `+04:00` to `+03:00`.
 This might be described as 'the clocks will move back one hour tonight at 2am'.

 This class is immutable and thread-safe.

> *Since 1.8*
