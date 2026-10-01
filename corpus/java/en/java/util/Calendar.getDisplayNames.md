---
id: "java-en-function-calendar-getdisplaynames"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getDisplayNames"
signature: "public Map<String, Integer> getDisplayNames(int field, int style, Locale locale)"
title: "Calendar.getDisplayNames"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getDisplayNames

```java
public Map<String, Integer> getDisplayNames(int field, int style, Locale locale)
```

Returns a `Map` containing all names of the calendar
 `field` in the given `style` and
 `locale` and their corresponding field values. For
 example, if this `Calendar` is a `GregorianCalendar`, the returned map would contain "Jan" to
 `JANUARY`, "Feb" to `FEBRUARY`, and so on, in the
 `SHORT short` style in an English locale.

 

Narrow names may not be unique due to use of single characters,
 such as "S" for Sunday and Saturday. In that case narrow names are not
 included in the returned `Map`.

 

The values of other calendar fields may be taken into
 account to determine a set of display names. For example, if
 this `Calendar` is a lunisolar calendar system and
 the year value given by the `YEAR` field has a leap
 month, this method would return month names containing the leap
 month name, and month names are mapped to their values specific
 for the year.

 

The default implementation supports display names contained in
 a `DateFormatSymbols`. For example, if `field`
 is `MONTH` and `style` is `ALL_STYLES`, this method returns a `Map` containing
 all strings returned by `getShortMonths`
 and `getMonths`.

 

Unlike `getDisplayName`, this
 method will not throw an `IllegalArgumentException` if the
 `Calendar` is non-lenient and any of the calendar fields have
 invalid values. Instead, this method will return either `null` or
 a `Map`.

**参数**

- **field** — the calendar field for which the display names are returned
- **style** — the style applied to the string representation; one of `SHORT_FORMAT` (`SHORT`), `SHORT_STANDALONE`, `LONG_FORMAT` (`LONG`), `LONG_STANDALONE`, `NARROW_FORMAT`, or `NARROW_STANDALONE`
- **locale** — the locale for the display names

**返回**

- a `Map` containing all display names in `style` and `locale` and their field values, or `null` if no display names are defined for `field`

**异常**

- **IllegalArgumentException** — if `field` or `style` is invalid
- **NullPointerException** — if `locale` is null

> *Since 1.6*
