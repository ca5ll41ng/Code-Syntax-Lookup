---
id: "java-en-function-java-time-chrono-minguochronology"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.MinguoChronology"
title: "MinguoChronology"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/MinguoChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MinguoChronology

The Minguo calendar system.
 

 This chronology defines the rules of the Minguo calendar system.
 This calendar system is primarily used in the Republic of China, often known as Taiwan.
 Dates are aligned such that `0001-01-01 (Minguo)` is `1912-01-01 (ISO)`.
 

 The fields are defined as follows:
 
 
- era - There are two eras, the current 'Republic' (ERA_ROC) and the previous era (ERA_BEFORE_ROC).
 
- year-of-era - The year-of-era for the current era increases uniformly from the epoch at year one.
  For the previous era the year increases from one as time goes backwards.
  The value for the current era is equal to the ISO proleptic-year minus 1911.
 
- proleptic-year - The proleptic year is the same as the year-of-era for the
  current era. For the previous era, years have zero, then negative values.
  The value is equal to the ISO proleptic-year minus 1911.
 
- month-of-year - The Minguo month-of-year exactly matches ISO.
 
- day-of-month - The Minguo day-of-month exactly matches ISO.
 
- day-of-year - The Minguo day-of-year exactly matches ISO.
 
- leap-year - The Minguo leap-year pattern exactly matches ISO, such that the two calendars
  are never out of step.
 

 This class is immutable and thread-safe.

> *Since 1.8*
