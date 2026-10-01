---
id: "java-en-function-java-time-chrono-japanesechronology"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.JapaneseChronology"
title: "JapaneseChronology"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/JapaneseChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseChronology

The Japanese Imperial calendar system.
 

 This chronology defines the rules of the Japanese Imperial calendar system.
 This calendar system is primarily used in Japan.
 The Japanese Imperial calendar system is the same as the ISO calendar system
 apart from the era-based year numbering.
 

 Japan introduced the Gregorian calendar starting with Meiji 6.
 Only Meiji and later eras are supported;
 dates before Meiji 6, January 1 are not supported.
 

 The supported `ChronoField` instances are:
 
 
- `DAY_OF_WEEK`
 
- `DAY_OF_MONTH`
 
- `DAY_OF_YEAR`
 
- `EPOCH_DAY`
 
- `MONTH_OF_YEAR`
 
- `PROLEPTIC_MONTH`
 
- `YEAR_OF_ERA`
 
- `YEAR`
 
- `ERA`
 

 This class is immutable and thread-safe.

> *Since 1.8*
