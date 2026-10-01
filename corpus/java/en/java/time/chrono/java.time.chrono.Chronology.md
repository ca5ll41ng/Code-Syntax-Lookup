---
id: "java-en-function-java-time-chrono-chronology"
language: "java"
lang: "en"
category: "function"
name: "java.time.chrono.Chronology"
title: "Chronology"
directive: "type"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology

A calendar system, used to organize and identify dates.
 

 The main date and time API is built on the ISO calendar system.
 The chronology operates behind the scenes to represent the general concept of a calendar system.
 For example, the Japanese, Minguo, Thai Buddhist and others.
 

 Most other calendar systems also operate on the shared concepts of year, month and day,
 linked to the cycles of the Earth around the Sun, and the Moon around the Earth.
 These shared concepts are defined by `ChronoField` and are available
 for use by any `Chronology` implementation:
 
```

   LocalDate isoDate = ...
   ThaiBuddhistDate thaiDate = ...
   int isoYear = isoDate.get(ChronoField.YEAR);
   int thaiYear = thaiDate.get(ChronoField.YEAR);
 
```

 As shown, although the date objects are in different calendar systems, represented by different
 `Chronology` instances, both can be queried using the same constant on `ChronoField`.
 For a full discussion of the implications of this, see `ChronoLocalDate`.
 In general, the advice is to use the known ISO-based `LocalDate`, rather than
 `ChronoLocalDate`.
 

 While a `Chronology` object typically uses `ChronoField` and is based on
 an era, year-of-era, month-of-year, day-of-month model of a date, this is not required.
 A `Chronology` instance may represent a totally different kind of calendar system,
 such as the Mayan.
 

 In practical terms, the `Chronology` instance also acts as a factory.
 The `of` method allows an instance to be looked up by identifier,
 while the `ofLocale` method allows lookup by locale.
 

 The `Chronology` instance provides a set of methods to create `ChronoLocalDate` instances.
 The date classes are used to manipulate specific dates.
 
 
-  `dateNow`
 
-  `dateNow`
 
-  `dateNow`
 
-  `date`
 
-  `date`
 
-  `dateYearDay`
 
-  `dateYearDay`
 
-  `date`
 

 Adding New Calendars
 The set of available chronologies can be extended by applications.
 Adding a new calendar system requires the writing of an implementation of
 `Chronology`, `ChronoLocalDate` and `Era`.
 The majority of the logic specific to the calendar system will be in the
 `ChronoLocalDate` implementation.
 The `Chronology` implementation acts as a factory.
 

 To permit the discovery of additional chronologies, the `java.util.ServiceLoader ServiceLoader`
 is used. A file must be added to the `META-INF/services` directory with the
 name 'java.time.chrono.Chronology' listing the implementation classes.
 See the ServiceLoader for more details on service loading.
 For lookup by id or calendarType, the system provided calendars are found
 first followed by application provided calendars.
 

 Each chronology must define a chronology ID that is unique within the system.
 If the chronology represents a calendar system defined by the
 CLDR specification then the calendar type is the concatenation of the
 CLDR type and, if applicable, the CLDR variant.

 This interface must be implemented with care to ensure other classes operate correctly.
 All implementations that can be instantiated must be final, immutable and thread-safe.
 Subclasses should be Serializable wherever possible.

> *Since 1.8*
