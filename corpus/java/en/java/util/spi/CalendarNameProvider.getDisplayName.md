---
id: "java-en-function-calendarnameprovider-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "CalendarNameProvider.getDisplayName"
signature: "public abstract String getDisplayName(String calendarType, int field, int value, int style, Locale locale)"
title: "CalendarNameProvider.getDisplayName"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/CalendarNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CalendarNameProvider.getDisplayName

```java
public abstract String getDisplayName(String calendarType, int field, int value, int style, Locale locale)
```

Returns the string representation (display name) of the calendar
 `field value` in the given `style` and
 `locale`.  If no string representation is
 applicable, `null` is returned.

 

`field` is a `Calendar` field index, such as `MONTH`. The time zone fields, `ZONE_OFFSET` and
 `DST_OFFSET`, are not supported by this
 method. `null` must be returned if any time zone fields are
 specified.

 

`value` is the numeric representation of the `field` value.
 For example, if `field` is `DAY_OF_WEEK`, the valid
 values are `SUNDAY` to `SATURDAY`
 (inclusive).

 

`style` gives the style of the string representation. It is one
 of `SHORT_FORMAT` (`SHORT SHORT`),
 `SHORT_STANDALONE`, `LONG_FORMAT`
 (`LONG LONG`), `LONG_STANDALONE`,
 `NARROW_FORMAT`, or `NARROW_STANDALONE`.

 

For example, the following call will return `"Sunday"`.
 
```

 getDisplayName("gregory", Calendar.DAY_OF_WEEK, Calendar.SUNDAY,
                Calendar.LONG_STANDALONE, Locale.ENGLISH);
 
```

**参数**

- **calendarType** — the calendar type. (Any calendar type given by `locale` is ignored.)
- **field** — the `Calendar` field index, such as `DAY_OF_WEEK`
- **value** — the value of the `Calendar field`, such as `MONDAY`
- **style** — the string representation style: one of `SHORT_FORMAT` (`SHORT SHORT`), `SHORT_STANDALONE`, `LONG_FORMAT` (`LONG LONG`), `LONG_STANDALONE`, `NARROW_FORMAT`, or `NARROW_STANDALONE`
- **locale** — the desired locale

**返回**

- the string representation of the `field value`, or `null` if the string representation is not applicable or the given calendar type is unknown

**异常**

- **IllegalArgumentException** — if `field` or `style` is invalid
- **NullPointerException** — if `locale` is `null`

**参见**

- TimeZoneNameProvider
- java.util.Calendar#get(int)
- java.util.Calendar#getDisplayName(int, int, Locale)
