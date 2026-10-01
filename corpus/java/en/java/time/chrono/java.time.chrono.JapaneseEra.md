---
id: "java-en-function-java-time-chrono-japaneseera"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.JapaneseEra"
title: "JapaneseEra"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/JapaneseEra.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseEra

An era in the Japanese Imperial calendar system.
 

 The Japanese government defines the official name and start date of
 each era. Eras are consecutive and their date ranges do not overlap,
 so the end date of one era is always the day before the start date
 of the next era.
 

 The Java SE Platform supports all eras defined by the Japanese government,
 beginning with the Meiji era. Each era is identified in the Platform by an
 integer value and a name. The `of` and `valueOf`
 methods may be used to obtain a singleton instance of `JapaneseEra`
 for each era. The `values` method returns the singleton instances
 of all supported eras.
 

 For convenience, this class declares a number of public static final fields
 that refer to singleton instances returned by the `values` method.

 The fields declared in this class may evolve over time, in line with the
 results of the `values` method. However, there is not necessarily
 a 1:1 correspondence between the fields and the singleton instances.

 The Japanese government may announce a new era and define its start
 date but not its official name. In this scenario, the singleton instance
 that represents the new era may return a name that is not stable until
 the official name is defined. Developers should exercise caution when
 relying on the name returned by any singleton instance that does not
 correspond to a public static final field.

 This class is immutable and thread-safe.

> *Since 1.8*
