---
id: "java-en-function-dateformatprovider-getdateinstance"
language: "java"
lang: "en"
category: "function"
name: "DateFormatProvider.getDateInstance"
signature: "public abstract DateFormat getDateInstance(int style, Locale locale)"
title: "DateFormatProvider.getDateInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/DateFormatProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatProvider.getDateInstance

```java
public abstract DateFormat getDateInstance(int style, Locale locale)
```

Returns a new `DateFormat` instance which formats date
 with the given formatting style for the specified locale.

**参数**

- **style** — the given formatting style.  Either one of `SHORT DateFormat.SHORT`, `MEDIUM DateFormat.MEDIUM`, `LONG DateFormat.LONG`, or `FULL DateFormat.FULL`.
- **locale** — the desired locale.

**返回**

- a date formatter.

**异常**

- **IllegalArgumentException** — if `style` is invalid, or if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.
- **NullPointerException** — if `locale` is null

**参见**

- java.text.DateFormat#getDateInstance(int, java.util.Locale)
