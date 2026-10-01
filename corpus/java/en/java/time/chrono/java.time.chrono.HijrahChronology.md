---
id: "java-en-function-java-time-chrono-hijrahchronology"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.HijrahChronology"
title: "HijrahChronology"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/HijrahChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HijrahChronology

The Hijrah calendar is a lunar calendar supporting Islamic calendars.
 

 The HijrahChronology follows the rules of the Hijrah calendar system. The Hijrah
 calendar has several variants based on differences in when the new moon is
 determined to have occurred and where the observation is made.
 In some variants the length of each month is
 computed algorithmically from the astronomical data for the moon and earth and
 in others the length of the month is determined by an authorized sighting
 of the new moon. For the algorithmically based calendars the calendar
 can project into the future.
 For sighting based calendars only historical data from past
 sightings is available.
 

 The length of each month is 29 or 30 days.
 Ordinary years have 354 days; leap years have 355 days.

 

 CLDR and LDML identify variants:
 
 Variants of Hijrah Calendars
 
 
 Chronology ID
 Calendar Type
 Locale extension, see `java.util.Locale`
 Description
 
 
 
 
 Hijrah-umalqura
 islamic-umalqura
 ca-islamic-umalqura
 Islamic - Umm Al-Qura calendar of Saudi Arabia
 
 
 
 

Additional variants may be available through `getAvailableChronologies`.

 

Example
 

 Selecting the chronology from the locale uses `ofLocale`
 to find the Chronology based on Locale supported BCP 47 extension mechanism
 to request a specific calendar ("ca"). For example,
 
 
```

      Locale locale = Locale.forLanguageTag("en-US-u-ca-islamic-umalqura");
      Chronology chrono = Chronology.ofLocale(locale);
 
```

 This class is immutable and thread-safe.

 Each Hijrah variant is configured individually. Each variant is defined by a
 property resource that defines the `ID`, the `calendar type`,
 the start of the calendar, the alignment with the
 ISO calendar, and the length of each month for a range of years.
 The variants are loaded by HijrahChronology as a resource from
 hijrah-config-&lt;calendar type&gt;.properties.
 

 The Hijrah property resource is a set of properties that describe the calendar.
 The syntax is defined by `java.util.Properties#load(Reader)`.
 
 Configuration of Hijrah Calendar
 
 
 Property Name
 Property value
 Description
 
 
 
 
 id
 Chronology Id, for example, "Hijrah-umalqura"
 The Id of the calendar in common usage
 
 
 type
 Calendar type, for example, "islamic-umalqura"
 LDML defines the calendar types
 
 
 version
 Version, for example: "1.8.0_1"
 The version of the Hijrah variant data
 
 
 iso-start
 ISO start date, formatted as `yyyy-MM-dd`, for example: "1900-04-30"
 The ISO date of the first day of the minimum Hijrah year.
 
 
 yyyy - a numeric 4 digit year, for example "1434"
 The value is a sequence of 12 month lengths,
 for example: "29 30 29 30 29 30 30 30 29 30 29 29"
 The lengths of the 12 months of the year separated by whitespace.
 A numeric year property must be present for every year without any gaps.
 The month lengths must be between 29-32 inclusive.
 
 
 
 
 

 Additional variants may be added by providing configuration properties files in
 `/conf/chronology` directory. The properties
 files should follow the naming convention of
 `hijrah-config-_.properties`.

> *Since 1.8*
