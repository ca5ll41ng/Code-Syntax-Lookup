---
id: "java-en-function-java-time-chrono-chronozoneddatetime"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.ChronoZonedDateTime"
title: "ChronoZonedDateTime"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime

A date-time with a time-zone in an arbitrary chronology,
 intended for advanced globalization use cases.
 

 **Most applications should declare method signatures, fields and variables
 as `ZonedDateTime`, not this interface.**
 

 A `ChronoZonedDateTime` is the abstract representation of an offset date-time
 where the `Chronology chronology`, or calendar system, is pluggable.
 The date-time is defined in terms of fields expressed by `TemporalField`,
 where most common implementations are defined in `ChronoField`.
 The chronology defines how the calendar system operates and the meaning of
 the standard fields.

 When to use this interface
 The design of the API encourages the use of `ZonedDateTime` rather than this
 interface, even in the case where the application needs to deal with multiple
 calendar systems. The rationale for this is explored in detail in `ChronoLocalDate`.
 

 Ensure that the discussion in `ChronoLocalDate` has been read and understood
 before using this interface.

 This interface must be implemented with care to ensure other classes operate correctly.
 All implementations that can be instantiated must be final, immutable and thread-safe.
 Subclasses should be Serializable wherever possible.

**参数**

- **the** — concrete type for the date of this date-time

> *Since 1.8*
