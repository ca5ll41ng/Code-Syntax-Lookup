---
id: "java-en-function-timezonenameprovider-getgenericdisplayname"
language: "java"
lang: "en"
category: "function"
name: "TimeZoneNameProvider.getGenericDisplayName"
signature: "public String getGenericDisplayName(String ID, int style, Locale locale)"
title: "TimeZoneNameProvider.getGenericDisplayName"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/TimeZoneNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZoneNameProvider.getGenericDisplayName

```java
public String getGenericDisplayName(String ID, int style, Locale locale)
```

Returns a generic name for the given time zone `ID` that's suitable
 for presentation to the user in the specified `locale`. Generic
 time zone names are neutral from standard time and daylight saving
 time. For example, "PT" is the short generic name of time zone ID `America/Los_Angeles`, while its short standard time and daylight saving
 time names are "PST" and "PDT", respectively. Refer to
 `getDisplayName(String, boolean, int, Locale) getDisplayName`
 for valid time zone IDs.

 

The default implementation of this method returns `null`.

**参数**

- **ID** — a time zone ID string
- **style** — either `LONG TimeZone.LONG` or `SHORT TimeZone.SHORT`
- **locale** — the desired locale

**返回**

- the human-readable generic name of the given time zone in the given locale, or `null` if it's not available.

**异常**

- **IllegalArgumentException** — if `style` is invalid, or `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.
- **NullPointerException** — if `ID` or `locale` is `null`

> *Since 1.8*
