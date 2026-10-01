---
id: "java-en-function-breakiteratorprovider-getlineinstance"
language: "java"
lang: "en"
category: "function"
name: "BreakIteratorProvider.getLineInstance"
signature: "public abstract BreakIterator getLineInstance(Locale locale)"
title: "BreakIteratorProvider.getLineInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/BreakIteratorProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BreakIteratorProvider.getLineInstance

```java
public abstract BreakIterator getLineInstance(Locale locale)
```

Returns a new `BreakIterator` instance
 for line breaks
 for the given locale.

**参数**

- **locale** — the desired locale

**返回**

- A break iterator for line breaks

**异常**

- **NullPointerException** — if `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.text.BreakIterator#getLineInstance(java.util.Locale)
