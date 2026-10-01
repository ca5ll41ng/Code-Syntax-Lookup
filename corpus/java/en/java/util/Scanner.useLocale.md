---
id: "java-en-function-scanner-uselocale"
language: "java"
lang: "en"
category: "function"
name: "Scanner.useLocale"
signature: "public Scanner useLocale(Locale locale)"
title: "Scanner.useLocale"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.useLocale

```java
public Scanner useLocale(Locale locale)
```

Sets this scanner's locale to the specified locale.

 

A scanner's locale affects many elements of its default
 primitive matching regular expressions; see
 localized numbers above.

 

Invoking the `reset` method will set the scanner's locale to
 the initial locale.

**参数**

- **locale** — A string specifying the locale to use

**返回**

- this scanner
