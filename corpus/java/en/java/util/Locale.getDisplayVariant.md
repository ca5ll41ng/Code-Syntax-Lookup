---
id: "java-en-function-locale-getdisplayvariant"
language: "java"
lang: "en"
category: "function"
name: "Locale.getDisplayVariant"
signature: "public String getDisplayVariant()"
title: "Locale.getDisplayVariant"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getDisplayVariant

```java
public String getDisplayVariant()
```

Returns a name for `this` locale's variant code that is appropriate for display to the
 user.  If possible, the name will be localized for the default
 `DISPLAY DISPLAY` locale.  If the locale
 doesn't specify a variant code, this function returns the empty string.

**返回**

- The name of the display variant code appropriate to the default `DISPLAY DISPLAY` locale.
