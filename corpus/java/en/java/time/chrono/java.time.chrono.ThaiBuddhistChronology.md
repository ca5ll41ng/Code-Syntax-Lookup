---
id: "java-en-function-java-time-chrono-thaibuddhistchronology"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.ThaiBuddhistChronology"
title: "ThaiBuddhistChronology"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ThaiBuddhistChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThaiBuddhistChronology

The Thai Buddhist calendar system.
 

 This chronology defines the rules of the Thai Buddhist calendar system.
 This calendar system is primarily used in Thailand.
 Dates are aligned such that `2484-01-01 (Buddhist)` is `1941-01-01 (ISO)`.
 

 The fields are defined as follows:
 
 
- era - There are two eras, the current 'Buddhist' (ERA_BE) and the previous era (ERA_BEFORE_BE).
 
- year-of-era - The year-of-era for the current era increases uniformly from the epoch at year one.
  For the previous era the year increases from one as time goes backwards.
  The value for the current era is equal to the ISO proleptic-year plus 543.
 
- proleptic-year - The proleptic year is the same as the year-of-era for the
  current era. For the previous era, years have zero, then negative values.
  The value is equal to the ISO proleptic-year plus 543.
 
- month-of-year - The ThaiBuddhist month-of-year exactly matches ISO.
 
- day-of-month - The ThaiBuddhist day-of-month exactly matches ISO.
 
- day-of-year - The ThaiBuddhist day-of-year exactly matches ISO.
 
- leap-year - The ThaiBuddhist leap-year pattern exactly matches ISO, such that the two calendars
  are never out of step.
 

 This class is immutable and thread-safe.

> *Since 1.8*
