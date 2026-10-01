---
id: "java-en-function-breakiteratorprovider-getwordinstance"
language: "java"
lang: "en"
category: "function"
name: "BreakIteratorProvider.getWordInstance"
signature: "public abstract BreakIterator getWordInstance(Locale locale)"
title: "BreakIteratorProvider.getWordInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/BreakIteratorProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BreakIteratorProvider.getWordInstance

```java
public abstract BreakIterator getWordInstance(Locale locale)
```

Returns a new `BreakIterator` instance
 for word breaks
 for the given locale.

**参数**

- **locale** — the desired locale

**返回**

- A break iterator for word breaks

**异常**

- **NullPointerException** — if `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.text.BreakIterator#getWordInstance(java.util.Locale)
