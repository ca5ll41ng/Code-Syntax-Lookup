---
id: "java-en-function-currency-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "Currency.getDisplayName"
signature: "public String getDisplayName()"
title: "Currency.getDisplayName"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Currency.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Currency.getDisplayName

```java
public String getDisplayName()
```

Gets the name that is suitable for displaying this currency for
 the default `DISPLAY DISPLAY` locale.
 If there is no suitable display name found
 for the default locale, the ISO 4217 currency code is returned.

 This is equivalent to calling
 `getDisplayName(Locale)
     getDisplayName`.

**返回**

- the display name of this currency for the default `DISPLAY DISPLAY` locale

> *Since 1.7*
