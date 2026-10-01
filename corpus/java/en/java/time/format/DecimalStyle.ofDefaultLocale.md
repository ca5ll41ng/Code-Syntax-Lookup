---
id: "java-en-function-decimalstyle-ofdefaultlocale"
language: "java"
lang: "en"
category: "function"
name: "DecimalStyle.ofDefaultLocale"
signature: "public static DecimalStyle ofDefaultLocale()"
title: "DecimalStyle.ofDefaultLocale"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DecimalStyle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalStyle.ofDefaultLocale

```java
public static DecimalStyle ofDefaultLocale()
```

Obtains the DecimalStyle for the default
 `FORMAT FORMAT` locale.
 

 This method provides access to locale sensitive decimal style symbols.
 

 This is equivalent to calling
 `of(Locale)
     of`.

**返回**

- the decimal style, not null

**参见**

- java.util.Locale.Category#FORMAT
