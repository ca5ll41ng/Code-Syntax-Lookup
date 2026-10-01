---
id: "java-en-function-java-time-temporal-valuerange"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.ValueRange"
title: "ValueRange"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange

The range of valid values for a date-time field.
 

 All `TemporalField` instances have a valid range of values.
 For example, the ISO day-of-month runs from 1 to somewhere between 28 and 31.
 This class captures that valid range.
 

 It is important to be aware of the limitations of this class.
 Only the minimum and maximum values are provided.
 It is possible for there to be invalid values within the outer range.
 For example, a weird field may have valid values of 1, 2, 4, 6, 7, thus
 have a range of '1 - 7', despite the fact that values 3 and 5 are invalid.
 

 Instances of this class are not tied to a specific field.

 This class is immutable and thread-safe.

> *Since 1.8*
