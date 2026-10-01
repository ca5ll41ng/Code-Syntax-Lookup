---
id: "java-en-function-java-time-temporal-julianfields"
language: "java"
lang: "en"
category: "function"
name: "java.time.temporal.JulianFields"
title: "JulianFields"
directive: "type"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/JulianFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JulianFields

A set of date fields that provide access to Julian Days.
 

 The Julian Day is a standard way of expressing date and time commonly used in the scientific community.
 It is expressed as a decimal number of whole days where days start at midday.
 This class represents variations on Julian Days that count whole days from midnight.
 

 The fields are implemented relative to `EPOCH_DAY EPOCH_DAY`.
 The fields are supported, and can be queried and set if `EPOCH_DAY` is available.
 The fields work with all chronologies.

 This is an immutable and thread-safe class.

> *Since 1.8*
