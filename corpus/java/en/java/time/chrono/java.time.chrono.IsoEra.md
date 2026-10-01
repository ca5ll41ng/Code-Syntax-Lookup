---
id: "java-en-function-java-time-chrono-isoera"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.IsoEra"
title: "IsoEra"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/IsoEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoEra

An era in the ISO calendar system.
 

 The ISO-8601 standard does not define eras.
 A definition has therefore been created with two eras - 'Current era' (CE) for
 years on or after 0001-01-01 (ISO), and 'Before current era' (BCE) for years before that.

 
 ISO years and eras
 
 
 year-of-era
 era
 proleptic-year
 
 
 
 
 2CE2
 
 
 1CE1
 
 
 1BCE0
 
 
 2BCE-1
 
 
 
 

 **Do not use `ordinal()` to obtain the numeric representation of `IsoEra`.
 Use `getValue()` instead.**

 This is an immutable and thread-safe enum.

> *Since 1.8*
