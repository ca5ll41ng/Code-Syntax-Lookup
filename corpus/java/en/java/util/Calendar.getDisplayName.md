---
id: "java-en-function-calendar-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getDisplayName"
signature: "public String getDisplayName(int field, int style, Locale locale)"
title: "Calendar.getDisplayName"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getDisplayName

```java
public String getDisplayName(int field, int style, Locale locale)
```

Returns the string representation of the calendar
 `field` value in the given `style` and
 `locale`.  If no string representation is
 applicable, `null` is returned. This method calls
 `get` to get the calendar
 `field` value if the string representation is
 applicable to the given calendar `field`.

 

For example, if this `Calendar` is a
 `GregorianCalendar` and its date is 2005-01-01, then
 the string representation of the `MONTH` field would be
 "January" in the long style in an English locale or "Jan" in
 the short style. However, no string representation would be
 available for the `DAY_OF_MONTH` field, and this method
 would return `null`.

 

The default implementation supports the calendar fields for
 which a `DateFormatSymbols` has names in the given
 `locale`.

 

If there is no string representation of the `Calendar` `field`
 and the calendar is in non-lenient mode and any calendar fields have invalid values,
 `null` is returned. If there is a string representation of the `Calendar`
 `field` and the calendar is in non-lenient mode and any calendar fields
 have invalid values, `IllegalArgumentException` will be thrown.

**参数**

- **field** — the calendar field for which the string representation is returned
- **style** — the style applied to the string representation; one of `SHORT_FORMAT` (`SHORT`), `SHORT_STANDALONE`, `LONG_FORMAT` (`LONG`), `LONG_STANDALONE`, `NARROW_FORMAT`, or `NARROW_STANDALONE`.
- **locale** — the locale for the string representation (any calendar types specified by `locale` are ignored)

**返回**

- the string representation of the given `field` in the given `style`, or `null` if no string representation is applicable.

**异常**

- **IllegalArgumentException** — if `field` or `style` is invalid, or if this `Calendar` is non-lenient and any of the calendar fields have invalid values
- **NullPointerException** — if `locale` is null

> *Since 1.6*
