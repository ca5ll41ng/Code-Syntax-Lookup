---
id: "java-en-function-java-time-dayofweek"
language: "java"
lang: "en"
category: "function"
name: "java.time.DayOfWeek"
title: "DayOfWeek"
directive: "type"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/DayOfWeek.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DayOfWeek

A day-of-week, such as 'Tuesday'.
 

 `DayOfWeek` is an enum representing the 7 days of the week -
 Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.
 

 In addition to the textual enum name, each day-of-week has an `int` value.
 The `int` value follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday).
 It is recommended that applications use the enum rather than the `int` value
 to ensure code clarity.
 

 This enum provides access to the localized textual form of the day-of-week.
 Some locales also assign different numeric values to the days, declaring
 Sunday to have the value 1, however this class provides no support for this.
 See `WeekFields` for localized week-numbering.
 

 **Do not use `ordinal()` to obtain the numeric representation of `DayOfWeek`.
 Use `getValue()` instead.**
 

 This enum represents a common concept that is found in many calendar systems.
 As such, this enum may be used by any calendar system that has the day-of-week
 concept defined exactly equivalent to the ISO calendar system.

 This is an immutable and thread-safe enum.

> *Since 1.8*
