---
id: "java-en-function-decimalstyle-of"
language: "java"
lang: "en"
category: "function"
name: "DecimalStyle.of"
signature: "public static DecimalStyle of(Locale locale)"
title: "DecimalStyle.of"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DecimalStyle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalStyle.of

```java
public static DecimalStyle of(Locale locale)
```

Obtains the DecimalStyle for the specified locale.
 

 This method provides access to locale sensitive decimal style symbols.
 If the locale contains "nu" (Numbering System) and/or "rg"
 (Region Override) `#def_locale_extension Unicode extensions`,
 returned instance will reflect the values specified with
 those extensions. If both "nu" and "rg" are specified, the value from
 the "nu" extension supersedes the implicit one from the "rg" extension.

**参数**

- **locale** — the locale, not null

**返回**

- the decimal style, not null
