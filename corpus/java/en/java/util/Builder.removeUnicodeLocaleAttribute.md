---
id: "java-en-function-builder-removeunicodelocaleattribute"
language: "java"
lang: "en"
category: "function"
name: "Builder.removeUnicodeLocaleAttribute"
signature: "public Builder removeUnicodeLocaleAttribute(String attribute)"
title: "Builder.removeUnicodeLocaleAttribute"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.removeUnicodeLocaleAttribute

```java
public Builder removeUnicodeLocaleAttribute(String attribute)
```

Removes a unicode locale attribute, if present, otherwise has no
 effect.  The attribute must not be null and must be
 `#def_locale_extension well-formed` or an exception
 is thrown.

 

Attribute comparison for removal is case-insensitive.

**参数**

- **attribute** — the attribute

**返回**

- This builder.

**异常**

- **NullPointerException** — if `attribute` is null
- **IllformedLocaleException** — if `attribute` is ill-formed

**参见**

- #setExtension(char, String)
