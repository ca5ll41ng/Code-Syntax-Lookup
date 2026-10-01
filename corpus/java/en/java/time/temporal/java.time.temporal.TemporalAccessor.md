---
id: "java-en-function-java-time-temporal-temporalaccessor"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.TemporalAccessor"
title: "TemporalAccessor"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAccessor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAccessor

Framework-level interface defining read-only access to a temporal object,
 such as a date, time, offset or some combination of these.
 

 This is the base interface type for date, time and offset objects.
 It is implemented by those classes that can provide information
 as `TemporalField fields` or `TemporalQuery queries`.
 

 Most date and time information can be represented as a number.
 These are modeled using `TemporalField` with the number held using
 a `long` to handle large values. Year, month and day-of-month are
 simple examples of fields, but they also include instant and offsets.
 See `ChronoField` for the standard set of fields.
 

 Two pieces of date/time information cannot be represented by numbers,
 the `java.time.chrono.Chronology chronology` and the
 `java.time.ZoneId time-zone`.
 These can be accessed via `query(TemporalQuery) queries` using
 the static methods defined on `TemporalQuery`.
 

 A sub-interface, `Temporal`, extends this definition to one that also
 supports adjustment and manipulation on more complete temporal objects.
 

 This interface is a framework-level interface that should not be widely
 used in application code. Instead, applications should create and pass
 around instances of concrete types, such as `LocalDate`.
 There are many reasons for this, part of which is that implementations
 of this interface may be in calendar systems other than ISO.
 See `java.time.chrono.ChronoLocalDate` for a fuller discussion of the issues.

 This interface places no restrictions on the mutability of implementations,
 however immutability is strongly recommended.

> *Since 1.8*
