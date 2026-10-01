---
id: "java-en-function-java-time-temporal-temporalunit"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.TemporalUnit"
title: "TemporalUnit"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalUnit

A unit of date-time, such as Days or Hours.
 

 Measurement of time is built on units, such as years, months, days, hours, minutes and seconds.
 Implementations of this interface represent those units.
 

 An instance of this interface represents the unit itself, rather than an amount of the unit.
 See `Period` for a class that represents an amount in terms of the common units.
 

 The most commonly used units are defined in `ChronoUnit`.
 Further units are supplied in `IsoFields`.
 Units can also be written by application code by implementing this interface.
 

 The unit works using double dispatch. Client code calls methods on a date-time like
 `LocalDateTime` which check if the unit is a `ChronoUnit`.
 If it is, then the date-time must handle it.
 Otherwise, the method call is re-dispatched to the matching method in this interface.

 This interface must be implemented with care to ensure other classes operate correctly.
 All implementations that can be instantiated must be final, immutable and thread-safe.
 It is recommended to use an enum where possible.

> *Since 1.8*
