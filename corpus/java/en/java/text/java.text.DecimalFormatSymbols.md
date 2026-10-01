---
id: "java-en-function-java-text-decimalformatsymbols"
language: "java"
lang: "en"
category: "function"
name: "java.text.DecimalFormatSymbols"
title: "DecimalFormatSymbols"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbols

This class represents the set of symbols (such as the decimal separator,
 the grouping separator, and so on) needed by `DecimalFormat`
 to format numbers. `DecimalFormat` creates for itself an instance of
 `DecimalFormatSymbols` from its locale data.  If you need to change any
 of these symbols, you can get the `DecimalFormatSymbols` object from
 your `DecimalFormat` and modify it.

 

The "rg" (region override), "nu" (numbering system), and "cu" (currency)
 `Locale` `#def_locale_extension Unicode
 extensions` are supported which may override values within the symbols.
 For both "nu" and "cu", if they are specified in addition to "rg" by the
 backing `Locale`, the respective values from the "nu" and "cu" extension
 supersede the implicit ones from the "rg" extension.

**参见**

- java.util.Locale
- DecimalFormat

> *Since 1.1*
