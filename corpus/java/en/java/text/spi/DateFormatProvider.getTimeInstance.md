---
id: "java-en-function-dateformatprovider-gettimeinstance"
language: "java"
lang: "en"
category: "function"
name: "DateFormatProvider.getTimeInstance"
signature: "public abstract DateFormat getTimeInstance(int style, Locale locale)"
title: "DateFormatProvider.getTimeInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/DateFormatProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatProvider.getTimeInstance

```java
public abstract DateFormat getTimeInstance(int style, Locale locale)
```

Returns a new `DateFormat` instance which formats time
 with the given formatting style for the specified locale.

**参数**

- **style** — the given formatting style.  Either one of `SHORT DateFormat.SHORT`, `MEDIUM DateFormat.MEDIUM`, `LONG DateFormat.LONG`, or `FULL DateFormat.FULL`.
- **locale** — the desired locale.

**返回**

- a time formatter.

**异常**

- **IllegalArgumentException** — if `style` is invalid, or if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.
- **NullPointerException** — if `locale` is null

**参见**

- java.text.DateFormat#getTimeInstance(int, java.util.Locale)
