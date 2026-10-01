---
id: "java-en-function-java-time-chrono-minguoera"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.MinguoEra"
title: "MinguoEra"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/MinguoEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MinguoEra

An era in the Minguo calendar system.
 

 The Minguo calendar system has two eras.
 The current era, for years from 1 onwards, is known as the 'Republic of China' era.
 All previous years, zero or earlier in the proleptic count or one and greater
 in the year-of-era count, are part of the 'Before Republic of China' era.

 
 Minguo years and eras
 
 
 year-of-era
 era
 proleptic-year
 ISO proleptic-year
 
 
 
 
 2ROC21913
 
 
 1ROC11912
 
 
 1BEFORE_ROC01911
 
 
 2BEFORE_ROC-11910
 
 
 
 

 **Do not use `ordinal()` to obtain the numeric representation of `MinguoEra`.
 Use `getValue()` instead.**

 This is an immutable and thread-safe enum.

> *Since 1.8*
