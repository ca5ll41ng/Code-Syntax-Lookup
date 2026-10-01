---
id: "java-en-function-breakiteratorprovider-getcharacterinstance"
language: "java"
lang: "en"
category: "function"
name: "BreakIteratorProvider.getCharacterInstance"
signature: "public abstract BreakIterator getCharacterInstance(Locale locale)"
title: "BreakIteratorProvider.getCharacterInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/BreakIteratorProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BreakIteratorProvider.getCharacterInstance

```java
public abstract BreakIterator getCharacterInstance(Locale locale)
```

Returns a new `BreakIterator` instance
 for character breaks
 for the given locale.

**参数**

- **locale** — the desired locale

**返回**

- A break iterator for character breaks

**异常**

- **NullPointerException** — if `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.text.BreakIterator#getCharacterInstance(java.util.Locale)
