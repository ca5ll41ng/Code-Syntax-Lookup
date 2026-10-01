---
id: "java-en-function-java-time-temporal-chronofield"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.ChronoField"
title: "ChronoField"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ChronoField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoField

A standard set of fields.
 

 This set of fields provide field-based access to manipulate a date, time or date-time.
 The standard set of fields can be extended by implementing `TemporalField`.
 

 These fields are intended to be applicable in multiple calendar systems.
 For example, most non-ISO calendar systems define dates as a year, month and day,
 just with slightly different rules.
 The documentation of each field explains how it operates.

 This is a final, immutable and thread-safe enum.

> *Since 1.8*
