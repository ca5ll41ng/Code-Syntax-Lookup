---
id: "java-en-function-localenameprovider-getdisplayvariant"
language: "java"
lang: "en"
category: "function"
name: "LocaleNameProvider.getDisplayVariant"
signature: "public abstract String getDisplayVariant(String variant, Locale locale)"
title: "LocaleNameProvider.getDisplayVariant"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/LocaleNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocaleNameProvider.getDisplayVariant

```java
public abstract String getDisplayVariant(String variant, Locale locale)
```

Returns a localized name for the given variant code and the given locale that
 is appropriate for display to the user.
 If the name returned cannot be localized according to `locale`,
 this method returns null.

**参数**

- **variant** — the variant string
- **locale** — the desired locale

**返回**

- the name of the given variant string for the specified locale, or null if it's not available.

**异常**

- **NullPointerException** — if `variant` or `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.util.Locale#getDisplayVariant(java.util.Locale)
