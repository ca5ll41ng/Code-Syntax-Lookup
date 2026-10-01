---
id: "java-en-function-calendarnameprovider-getdisplaynames"
language: "java"
lang: "en"
category: "function"
name: "CalendarNameProvider.getDisplayNames"
signature: "public abstract Map<String, Integer> getDisplayNames(String calendarType, int field, int style, Locale locale)"
title: "CalendarNameProvider.getDisplayNames"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/CalendarNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CalendarNameProvider.getDisplayNames

```java
public abstract Map<String, Integer> getDisplayNames(String calendarType, int field, int style, Locale locale)
```

Returns a `Map` containing all string representations (display
 names) of the `Calendar` `field` in the given `style`
 and `locale` and their corresponding field values.

 

`field` is a `Calendar` field index, such as `MONTH`. The time zone fields, `ZONE_OFFSET` and
 `DST_OFFSET`, are not supported by this
 method. `null` must be returned if any time zone fields are specified.

 

`style` gives the style of the string representation. It must be
 one of `ALL_STYLES`, `SHORT_FORMAT` (`SHORT SHORT`), `SHORT_STANDALONE`, `LONG_FORMAT` (`LONG LONG`), `LONG_STANDALONE`, `NARROW_FORMAT`, or
 `NARROW_STANDALONE`. Note that narrow names may
 not be unique due to use of single characters, such as "S" for Sunday
 and Saturday, and that no narrow names are included in that case.

 

For example, the following call will return a `Map` containing
 `"January"` to `JANUARY`, `"Jan"` to `JANUARY`, `"February"` to `FEBRUARY`,
 `"Feb"` to `FEBRUARY`, and so on.
 
```

 getDisplayNames("gregory", Calendar.MONTH, Calendar.ALL_STYLES, Locale.ENGLISH);
 
```

**参数**

- **calendarType** — the calendar type. (Any calendar type given by `locale` is ignored.)
- **field** — the calendar field for which the display names are returned
- **style** — the style applied to the display names; one of `ALL_STYLES`, `SHORT_FORMAT` (`SHORT SHORT`), `SHORT_STANDALONE`, `LONG_FORMAT` (`LONG LONG`), `LONG_STANDALONE`, `NARROW_FORMAT`, or `NARROW_STANDALONE`
- **locale** — the desired locale

**返回**

- a `Map` containing all display names of `field` in `style` and `locale` and their `field` values, or `null` if no display names are defined for `field`

**异常**

- **NullPointerException** — if `locale` is `null`

**参见**

- Calendar#getDisplayNames(int, int, Locale)
