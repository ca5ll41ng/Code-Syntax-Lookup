---
id: "java-en-function-dateformatprovider-getdatetimeinstance"
language: "java"
lang: "en"
category: "function"
name: "DateFormatProvider.getDateTimeInstance"
signature: "public abstract DateFormat getDateTimeInstance(int dateStyle, int timeStyle, Locale locale)"
title: "DateFormatProvider.getDateTimeInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/DateFormatProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatProvider.getDateTimeInstance

```java
public abstract DateFormat getDateTimeInstance(int dateStyle, int timeStyle, Locale locale)
```

Returns a new `DateFormat` instance which formats date and time
 with the given formatting style for the specified locale.

**参数**

- **dateStyle** — the given date formatting style.  Either one of `SHORT DateFormat.SHORT`, `MEDIUM DateFormat.MEDIUM`, `LONG DateFormat.LONG`, or `FULL DateFormat.FULL`.
- **timeStyle** — the given time formatting style.  Either one of `SHORT DateFormat.SHORT`, `MEDIUM DateFormat.MEDIUM`, `LONG DateFormat.LONG`, or `FULL DateFormat.FULL`.
- **locale** — the desired locale.

**返回**

- a date/time formatter.

**异常**

- **IllegalArgumentException** — if `dateStyle` or `timeStyle` is invalid, or if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.
- **NullPointerException** — if `locale` is null

**参见**

- java.text.DateFormat#getDateTimeInstance(int, int, java.util.Locale)
