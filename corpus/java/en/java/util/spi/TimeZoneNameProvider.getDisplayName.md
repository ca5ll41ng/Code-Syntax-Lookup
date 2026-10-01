---
id: "java-en-function-timezonenameprovider-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "TimeZoneNameProvider.getDisplayName"
signature: "public abstract String getDisplayName(String ID, boolean daylight, int style, Locale locale)"
title: "TimeZoneNameProvider.getDisplayName"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/TimeZoneNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZoneNameProvider.getDisplayName

```java
public abstract String getDisplayName(String ID, boolean daylight, int style, Locale locale)
```

Returns a name for the given time zone ID that's suitable for
 presentation to the user in the specified locale. The given time
 zone ID is "GMT" or one of the names defined using "Zone" entries
 in the "tz database", a public domain time zone database at
 https://www.iana.org/time-zones.
 The data of this database is contained in a file whose name starts with
 "tzdata", and the specification of the data format is part of the zic.8
 man page, which is contained in a file whose name starts with "tzcode".
 

 If `daylight` is true, the method should return a name
 appropriate for daylight saving time even if the specified time zone
 has not observed daylight saving time in the past.

**参数**

- **ID** — a time zone ID string
- **daylight** — if true, return the daylight saving name.
- **style** — either `LONG TimeZone.LONG` or `SHORT TimeZone.SHORT`
- **locale** — the desired locale

**返回**

- the human-readable name of the given time zone in the given locale, or null if it's not available.

**异常**

- **IllegalArgumentException** — if `style` is invalid, or `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.
- **NullPointerException** — if `ID` or `locale` is null

**参见**

- java.util.TimeZone#getDisplayName(boolean, int, java.util.Locale)
