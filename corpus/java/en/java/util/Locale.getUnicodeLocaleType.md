---
id: "java-en-function-locale-getunicodelocaletype"
language: "java"
lang: "en"
category: "function"
name: "Locale.getUnicodeLocaleType"
signature: "public String getUnicodeLocaleType(String key)"
title: "Locale.getUnicodeLocaleType"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getUnicodeLocaleType

```java
public String getUnicodeLocaleType(String key)
```

Returns the Unicode locale type associated with the specified Unicode locale key
 for this locale. Returns the empty string for keys that are defined with no type.
 Returns null if the key is not defined. Keys are case-insensitive. The key must
 be two alphanumeric characters ([0-9a-zA-Z]), or an IllegalArgumentException is
 thrown.

**参数**

- **key** — the Unicode locale key

**返回**

- The Unicode locale type associated with the key, or null if the locale does not define the key.

**异常**

- **IllegalArgumentException** — if the key is not well-formed
- **NullPointerException** — if `key` is null

> *Since 1.7*
