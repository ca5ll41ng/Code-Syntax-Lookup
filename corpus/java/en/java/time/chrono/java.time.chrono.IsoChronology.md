---
id: "java-en-function-java-time-chrono-isochronology"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.IsoChronology"
title: "IsoChronology"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/IsoChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoChronology

The ISO calendar system.
 

 This chronology defines the rules of the ISO calendar system.
 This calendar system is based on the ISO-8601 standard, which is the
 de facto world calendar.
 

 The fields are defined as follows:
 
 
- era - There are two eras, 'Current Era' (CE) and 'Before Current Era' (BCE).
 
- year-of-era - The year-of-era is the same as the proleptic-year for the current CE era.
  For the BCE era before the ISO epoch the year increases from 1 upwards as time goes backwards.
 
- proleptic-year - The proleptic year is the same as the year-of-era for the
  current era. For the previous era, years have zero, then negative values.
 
- month-of-year - There are 12 months in an ISO year, numbered from 1 to 12.
 
- day-of-month - There are between 28 and 31 days in each of the ISO month, numbered from 1 to 31.
  Months 4, 6, 9 and 11 have 30 days, Months 1, 3, 5, 7, 8, 10 and 12 have 31 days.
  Month 2 has 28 days, or 29 in a leap year.
 
- day-of-year - There are 365 days in a standard ISO year and 366 in a leap year.
  The days are numbered from 1 to 365 or 1 to 366.
 
- leap-year - Leap years occur every 4 years, except where the year is divisble by 100 and not divisble by 400.
 

 This class is immutable and thread-safe.

> *Since 1.8*
