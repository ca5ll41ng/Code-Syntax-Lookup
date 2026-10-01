---
id: "java-en-function-java-time-temporal-temporalfield"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.TemporalField"
title: "TemporalField"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField

A field of date-time, such as month-of-year or minute-of-hour.
 

 Date and time is expressed using fields which partition the time-line into something
 meaningful for humans. Implementations of this interface represent those fields.
 

 The most commonly used units are defined in `ChronoField`.
 Further fields are supplied in `IsoFields`, `WeekFields` and `JulianFields`.
 Fields can also be written by application code by implementing this interface.
 

 The field works using double dispatch. Client code calls methods on a date-time like
 `LocalDateTime` which check if the field is a `ChronoField`.
 If it is, then the date-time must handle it.
 Otherwise, the method call is re-dispatched to the matching method in this interface.

 This interface must be implemented with care to ensure other classes operate correctly.
 All implementations that can be instantiated must be final, immutable and thread-safe.
 Implementations should be `Serializable` where possible.
 An enum is as effective implementation choice.

> *Since 1.8*
