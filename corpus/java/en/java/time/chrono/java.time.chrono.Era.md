---
id: "java-en-function-java-time-chrono-era"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.Era"
title: "Era"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Era.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Era

An era of the time-line.
 

 Most calendar systems have a single epoch dividing the time-line into two eras.
 However, some calendar systems, have multiple eras, such as one for the reign
 of each leader.
 In all cases, the era is conceptually the largest division of the time-line.
 Each chronology defines the Era's that are known Eras and a
 `eras Chronology.eras` to get the valid eras.
 

 For example, the Thai Buddhist calendar system divides time into two eras,
 before and after a single date. By contrast, the Japanese calendar system
 has one era for the reign of each Emperor.
 

 Instances of `Era` may be compared using the `==` operator.

 This interface must be implemented with care to ensure other classes operate correctly.
 All implementations must be singletons - final, immutable and thread-safe.
 It is recommended to use an enum whenever possible.

> *Since 1.8*
