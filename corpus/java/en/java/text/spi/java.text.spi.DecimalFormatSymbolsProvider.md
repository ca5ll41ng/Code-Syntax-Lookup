---
id: "java-en-function-java-text-spi-decimalformatsymbolsprovider"
language: "java"
lang: "en"
category: "function"
name: "java.text.spi.DecimalFormatSymbolsProvider"
title: "DecimalFormatSymbolsProvider"
directive: "type"
module: "java.base/java.text.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/spi/DecimalFormatSymbolsProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbolsProvider

An abstract class for service providers that
 provide instances of the
 `java.text.DecimalFormatSymbols DecimalFormatSymbols` class.

 

The requested `Locale` may contain an `#def_locale_extension extension` for
 specifying the desired numbering system. For example, `"ar-u-nu-arab"`
 (in the BCP 47 language tag form) specifies Arabic with the Arabic-Indic
 digits and symbols, while `"ar-u-nu-latn"` specifies Arabic with the
 Latin digits and symbols. Refer to the Unicode Locale Data Markup
 Language (LDML) specification for numbering systems.

**参见**

- Locale#forLanguageTag(String)
- Locale#getExtension(char)

> *Since 1.6*
