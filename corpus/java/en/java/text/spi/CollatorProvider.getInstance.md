---
id: "java-en-function-collatorprovider-getinstance"
language: "java"
lang: "en"
category: "function"
name: "CollatorProvider.getInstance"
signature: "public abstract Collator getInstance(Locale locale)"
title: "CollatorProvider.getInstance"
directive: "method"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/CollatorProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollatorProvider.getInstance

```java
public abstract Collator getInstance(Locale locale)
```

Returns a new `Collator` instance for the specified locale.

**参数**

- **locale** — the desired locale.

**返回**

- the `Collator` for the desired locale.

**异常**

- **NullPointerException** — if `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.text.Collator#getInstance(java.util.Locale)
