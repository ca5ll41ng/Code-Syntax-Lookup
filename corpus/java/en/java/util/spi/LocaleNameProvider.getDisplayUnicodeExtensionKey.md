---
id: "java-en-function-localenameprovider-getdisplayunicodeextensionkey"
language: "java"
lang: "en"
category: "function"
name: "LocaleNameProvider.getDisplayUnicodeExtensionKey"
signature: "public String getDisplayUnicodeExtensionKey(String key, Locale locale)"
title: "LocaleNameProvider.getDisplayUnicodeExtensionKey"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/LocaleNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocaleNameProvider.getDisplayUnicodeExtensionKey

```java
public String getDisplayUnicodeExtensionKey(String key, Locale locale)
```

Returns a localized name for the given
 `#def_locale_extension Unicode extension` key,
 and the given locale that is appropriate for display to the user.
 If the name returned cannot be localized according to `locale`,
 this method returns null.

**参数**

- **key** — the Unicode Extension key, not null.
- **locale** — the desired locale, not null.

**返回**

- the name of the given key string for the specified locale, or null if it's not available.

**异常**

- **NullPointerException** — if `key` or `locale` is null
- **IllegalArgumentException** — if `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

> *Since 10*
