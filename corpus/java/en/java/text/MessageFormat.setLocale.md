---
id: "java-en-function-messageformat-setlocale"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.setLocale"
signature: "public void setLocale(Locale locale)"
title: "MessageFormat.setLocale"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.setLocale

```java
public void setLocale(Locale locale)
```

Sets the locale to be used when creating or comparing subformats.
 This affects subsequent calls
 
 
- to the `applyPattern applyPattern`
     and `toPattern toPattern` methods if format elements specify
     a format type and therefore have the subformats created in the
     `applyPattern` method, as well as
 
- to the `format` and
     `formatToCharacterIterator formatToCharacterIterator` methods
     if format elements do not specify a format type and therefore have
     the subformats created in the formatting methods.
 

 Subformats that have already been created are not affected.

**参数**

- **locale** — the locale to be used when creating or comparing subformats
