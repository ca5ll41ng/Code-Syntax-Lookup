---
id: "java-en-function-locale-setdefault"
language: "java"
lang: "en"
category: "function"
name: "Locale.setDefault"
signature: "public static synchronized void setDefault(Locale newLocale)"
title: "Locale.setDefault"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.setDefault

```java
public static synchronized void setDefault(Locale newLocale)
```

Sets the `#default_locale default locale` for
 this instance of the Java Virtual Machine. This does not affect the
 host locale.
 

 The Java Virtual Machine sets the default locale during startup
 based on the host environment. It is used by many locale-sensitive
 methods if no locale is explicitly specified.
 

 Since changing the default locale may affect many different areas
 of functionality, this method should only be used if the caller
 is prepared to reinitialize locale-sensitive code running
 within the same Java Virtual Machine.
 

 By setting the default locale with this method, all of the default
 locales for each Category are also set to the specified default locale.

**参数**

- **newLocale** — the new default locale

**异常**

- **NullPointerException** — if `newLocale` is null
