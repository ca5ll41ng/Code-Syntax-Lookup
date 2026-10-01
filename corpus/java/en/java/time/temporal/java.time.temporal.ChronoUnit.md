---
id: "java-en-function-java-time-temporal-chronounit"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.ChronoUnit"
title: "ChronoUnit"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ChronoUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoUnit

A standard set of date periods units.
 

 This set of units provide unit-based access to manipulate a date, time or date-time.
 The standard set of units can be extended by implementing `TemporalUnit`.
 

 These units are intended to be applicable in multiple calendar systems.
 For example, most non-ISO calendar systems define units of years, months and days,
 just with slightly different rules.
 The documentation of each unit explains how it operates.

 This is a final, immutable and thread-safe enum.

> *Since 1.8*
