---
id: "java-en-function-java-time-chrono-chronoperiod"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.ChronoPeriod"
title: "ChronoPeriod"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod

A date-based amount of time, such as '3 years, 4 months and 5 days' in an
 arbitrary chronology, intended for advanced globalization use cases.
 

 This interface models a date-based amount of time in a calendar system.
 While most calendar systems use years, months and days, some do not.
 Therefore, this interface operates solely in terms of a set of supported
 units that are defined by the `Chronology`.
 The set of supported units is fixed for a given chronology.
 The amount of a supported unit may be set to zero.
 

 The period is modeled as a directed amount of time, meaning that individual
 parts of the period may be negative.

 This interface must be implemented with care to ensure other classes operate correctly.
 All implementations that can be instantiated must be final, immutable and thread-safe.
 Subclasses should be Serializable wherever possible.

> *Since 1.8*
