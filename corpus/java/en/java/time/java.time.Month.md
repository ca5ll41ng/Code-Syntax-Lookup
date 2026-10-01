---
id: "java-en-function-java-time-month"
language: "java"
lang: "en"
category: "function"
name: "java.time.Month"
title: "Month"
directive: "type"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month

A month-of-year, such as 'July'.
 

 `Month` is an enum representing the 12 months of the year -
 January, February, March, April, May, June, July, August, September, October,
 November and December.
 

 In addition to the textual enum name, each month-of-year has an `int` value.
 The `int` value follows normal usage and the ISO-8601 standard,
 from 1 (January) to 12 (December). It is recommended that applications use the enum
 rather than the `int` value to ensure code clarity.
 

 **Do not use `ordinal()` to obtain the numeric representation of `Month`.
 Use `getValue()` instead.**
 

 This enum represents a common concept that is found in many calendar systems.
 As such, this enum may be used by any calendar system that has the month-of-year
 concept defined exactly equivalent to the ISO-8601 calendar system.

 This is an immutable and thread-safe enum.

> *Since 1.8*
