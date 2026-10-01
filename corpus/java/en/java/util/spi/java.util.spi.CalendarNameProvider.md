---
id: "java-en-function-java-util-spi-calendarnameprovider"
language: "java"
lang: "en"
category: "function"
name: "java.util.spi.CalendarNameProvider"
title: "CalendarNameProvider"
directive: "type"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/CalendarNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CalendarNameProvider

An abstract class for service providers that provide localized string
 representations (display names) of `Calendar` field values.

 

**Calendar Types**

 

Calendar types are used to specify calendar systems for which the `getDisplayName(String, int, int, int, Locale) getDisplayName` and `getDisplayNames(String, int, int, Locale) getDisplayNames` methods provide
 calendar field value names. See `getCalendarType` for details.

 

**Calendar Fields**

 

Calendar fields are specified with the constants defined in `Calendar`. The following are calendar-common fields and their values to be
 supported for each calendar system.

 
 Field values
 
   
     Field
     Value
     Description
   
 
 
   
     `MONTH`
     `JANUARY` to `UNDECIMBER`
     Month numbering is 0-based (e.g., 0 - January, ..., 11 -
         December). Some calendar systems have 13 months. Month
         names need to be supported in both the formatting and
         stand-alone forms if required by the supported locales. If there's
         no distinction in the two forms, the same names should be returned
         in both of the forms.
   
   
     `DAY_OF_WEEK`
     `SUNDAY` to `SATURDAY`
     Day-of-week numbering is 1-based starting from Sunday (i.e., 1 - Sunday,
         ..., 7 - Saturday).
   
   
     `AM_PM`
     `AM` to `PM`
     0 - AM, 1 - PM
   
 
 

 The following are calendar-specific fields and their values to be supported.

 
 Calendar type and field values
 
   
     Calendar Type
     Field
     Value
     Description
   
 
 
   
     `"gregory"`
     `ERA`
     0
     `BC` (BCE)
   
   
     1
     `AD` (CE)
   
   
     `"buddhist"`
     `ERA`
     0
     BC (BCE)
   
   
     1
     B.E. (Buddhist Era)
   
   
     `"japanese"`
     `ERA`
     0
     Seireki (Before Meiji)
   
   
     1
     Meiji
   
   
     2
     Taisho
   
   
     3
     Showa
   
   
     4
     Heisei
   
   
     5
     Reiwa
   
   
     `YEAR`
     1
     the first year in each era. It should be returned when a long
     style (`LONG_FORMAT` or `LONG_STANDALONE`) is
     specified. See also the 
     Year representation in `SimpleDateFormat`.
   
   
     `"roc"`
     `ERA`
     0
     Before R.O.C.
   
   
     1
     R.O.C.
   
   
     `"islamic"`
     `ERA`
     0
     Before AH
   
   
     1
     Anno Hijrah (AH)
   
 
 

 

Calendar field value names for `"gregory"` must be consistent with
 the date-time symbols provided by `java.text.spi.DateFormatSymbolsProvider`.

 

Time zone names are supported by `TimeZoneNameProvider`.

**参见**

- CalendarDataProvider
- Locale#getUnicodeLocaleType(String)

> *Since 1.8*
