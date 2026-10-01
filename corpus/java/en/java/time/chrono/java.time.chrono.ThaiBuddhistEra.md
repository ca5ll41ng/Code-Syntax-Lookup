---
id: "java-en-function-java-time-chrono-thaibuddhistera"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.ThaiBuddhistEra"
title: "ThaiBuddhistEra"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ThaiBuddhistEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThaiBuddhistEra

An era in the Thai Buddhist calendar system.
 

 The Thai Buddhist calendar system has two eras.
 The current era, for years from 1 onwards, is known as the 'Buddhist' era.
 All previous years, zero or earlier in the proleptic count or one and greater
 in the year-of-era count, are part of the 'Before Buddhist' era.

 
 Buddhist years and eras
 
 
 year-of-era
 era
 proleptic-year
 ISO proleptic-year
 
 
 
 
 2BE2-542
 
 
 1BE1-543
 
 
 1BEFORE_BE0-544
 
 
 2BEFORE_BE-1-545
 
 
 
 

 **Do not use `ordinal()` to obtain the numeric representation of `ThaiBuddhistEra`.
 Use `getValue()` instead.**

 This is an immutable and thread-safe enum.

> *Since 1.8*
