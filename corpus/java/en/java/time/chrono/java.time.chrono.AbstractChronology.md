---
id: "java-en-function-java-time-chrono-abstractchronology"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.AbstractChronology"
title: "AbstractChronology"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/AbstractChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractChronology

An abstract implementation of a calendar system, used to organize and identify dates.
 

 The main date and time API is built on the ISO calendar system.
 The chronology operates behind the scenes to represent the general concept of a calendar system.
 

 See `Chronology` for more details.

 This class is separated from the `Chronology` interface so that the static methods
 are not inherited. While `Chronology` can be implemented directly, it is strongly
 recommended to extend this abstract class instead.
 

 This class must be implemented with care to ensure other classes operate correctly.
 All implementations that can be instantiated must be final, immutable and thread-safe.
 Subclasses should be Serializable wherever possible.

> *Since 1.8*
