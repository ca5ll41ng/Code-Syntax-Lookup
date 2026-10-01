---
id: "java-en-function-java-text-dateformatsymbols"
language: "java"
lang: "en"
category: "function"
name: "java.text.DateFormatSymbols"
title: "DateFormatSymbols"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatSymbols

`DateFormatSymbols` is a public class for encapsulating
 localizable date-time formatting data, such as the names of the
 months, the names of the days of the week, and the time zone data.
 `SimpleDateFormat` uses
 `DateFormatSymbols` to encapsulate this information.

 

 Typically you shouldn't use `DateFormatSymbols` directly.
 Rather, you are encouraged to create a date-time formatter with the
 `DateFormat` class's factory methods: `getTimeInstance`,
 `getDateInstance`, or `getDateTimeInstance`.
 These methods automatically create a `DateFormatSymbols` for
 the formatter so that you don't have to. After the
 formatter is created, you may modify its format pattern using the
 `setPattern` method. For more information about
 creating formatters using `DateFormat`'s factory methods,
 see `DateFormat`.

 

 If you decide to create a date-time formatter with a specific
 format pattern for a specific locale, you can do so with:
 
 {@snippet lang=java :
 new SimpleDateFormat(aPattern, DateFormatSymbols.getInstance(aLocale));
 }
 

 

If the locale contains "rg" (region override)
 `#def_locale_extension Unicode extension`,
 the symbols are overridden for the designated region.

 

 `DateFormatSymbols` objects are cloneable. When you obtain
 a `DateFormatSymbols` object, feel free to modify the
 date-time formatting data. For instance, you can replace the localized
 date-time format pattern characters with the ones that you feel easy
 to remember. Or you can change the representative cities
 to your favorite ones.

 

 New `DateFormatSymbols` subclasses may be added to support
 `SimpleDateFormat` for date-time formatting for additional locales.

**参见**

- DateFormat
- SimpleDateFormat
- java.util.SimpleTimeZone

> *Since 1.1*
