---
id: "java-en-function-java-text-dateformat"
language: "java"
lang: "en"
category: "function"
name: "java.text.DateFormat"
title: "DateFormat"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat

`DateFormat` is an abstract class for date/time formatting subclasses which
 formats and parses dates or time in a language-independent manner.
 The date/time formatting subclass, such as `SimpleDateFormat`, allows for
 formatting (i.e., date &rarr; text), parsing (text &rarr; date), and
 normalization.  The date is represented as a `Date` object or
 as the milliseconds since January 1, 1970, 00:00:00 GMT.

 

`DateFormat` provides static factory methods for obtaining default date/time
 formatters based on the default or a given locale and a number of formatting
 styles. The formatting styles include `FULL`, `LONG`, `MEDIUM`, and `SHORT`.
 For any of the factory methods with the parameter style, an `IllegalArgumentException` will be thrown if style is not equal to any
 of the defined formatting styles. More detail and examples of using these styles are provided in the method
 descriptions.

 

`DateFormat` helps you to format and parse dates for any locale.
 Your code can be completely independent of the locale conventions for
 months, days of the week, or even the calendar format: lunar vs. solar.

 

To format a date for the current Locale, use one of the
 static factory methods:
 
 {@snippet lang=java :
 myString = DateFormat.getDateInstance().format(myDate);
 }
 
 

If you are formatting multiple dates, it is
 more efficient to get the format and use it multiple times so that
 the system doesn't have to fetch the information about the local
 language and country conventions multiple times.
 
 {@snippet lang=java :
 DateFormat df = DateFormat.getDateInstance();
 for (Date myDate : dates) {
     output.println(df.format(myDate) + "; ");
 }
 }
 
 

To format a date for a different Locale, specify it in the
 call to `getDateInstance`.
 
 {@snippet lang=java :
 DateFormat df = DateFormat.getDateInstance(DateFormat.LONG, Locale.FRANCE);
 }
 

 

If the specified locale contains "ca" (calendar), "rg" (region override),
 and/or "tz" (timezone) `#def_locale_extension Unicode
 extensions`, the calendar, the country and/or the time zone for formatting
 are overridden. If both "ca" and "rg" are specified, the calendar from the "ca"
 extension supersedes the implicit one from the "rg" extension.

 

You can use a DateFormat to parse also.
 
 {@snippet lang=java :
 myDate = df.parse(myString);
 }
 
 

Use `getDateInstance` to get the normal date format for that country.
 There are other static factory methods available.
 Use `getTimeInstance` to get the time format for that country.
 Use `getDateTimeInstance` to get a date and time format. You can pass in
 different options to these factory methods to control the length of the
 result; from `SHORT` to `MEDIUM` to `LONG` to `FULL`. The exact result depends
 on the locale, but generally:
 
- `SHORT` is the shortest and mainly numeric, such as `12.13.52` or `3:30pm`
 
- `MEDIUM` is longer, such as `Jan 12, 1952`
 
- `LONG` is even longer, such as `January 12, 1952` or `3:30:32pm`
 
- `FULL` is the longest, such as
 `Tuesday, April 12, 1952 AD or 3:30:42pm PST`.
 

 For those fields with text, typically abbreviated text form is used with `MEDIUM` option,
 and full text form is used with `LONG` and `FULL` options.

 

You can also set the time zone on the format if you wish.
 If you want even more control over the format or parsing,
 (or want to give your users more control),
 you can try casting the `DateFormat` you get from the factory methods
 to a `SimpleDateFormat`. This will work for the majority
 of countries; just remember to put it in a `try` block in case you
 encounter an unusual one.

 

You can also use forms of the parse and format methods with
 `ParsePosition` and `FieldPosition` to
 allow you to
 
- progressively parse through pieces of a string.
 
- align any particular field, or find out where it is for selection
 on the screen.
 

 Synchronization

 

 Date formats are not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.
 immutable and thread-safe alternative.

 
- The `format` and
 `parse` methods may throw
 `NullPointerException`, if any of their parameter is `null`.
 The subclass may provide its own implementation and specification about
 `NullPointerException`.
 
- The `setCalendar`, `setNumberFormat` and `setTimeZone` methods
 do not throw `NullPointerException` when their parameter is
 `null`, but any subsequent operations on the same instance may throw
 `NullPointerException`.
 
- The `getCalendar`, `getNumberFormat` and
 `getTimeZone` methods may return `null`, if the respective
 values of this instance is set to `null` through the corresponding
 setter methods. For Example: `getTimeZone` may return `null`,
 if the `TimeZone` value of this instance is set as
 `setTimeZone`.

**参见**

- Format
- NumberFormat
- SimpleDateFormat
- java.util.Calendar
- java.util.GregorianCalendar
- java.util.TimeZone
- java.time.format.DateTimeFormatter

> *Since 1.1*
