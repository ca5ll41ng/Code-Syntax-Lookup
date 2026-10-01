---
id: "java-en-function-compactnumberformat-compactnumberformat"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.CompactNumberFormat"
signature: "public CompactNumberFormat(String decimalPattern, DecimalFormatSymbols symbols, String[] compactPatterns)"
title: "CompactNumberFormat.CompactNumberFormat"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.CompactNumberFormat

```java
public CompactNumberFormat(String decimalPattern, DecimalFormatSymbols symbols, String[] compactPatterns)
```

Creates a `CompactNumberFormat` using the given decimal pattern,
 decimal format symbols and compact patterns.
 To obtain the instance of `CompactNumberFormat` with the standard
 compact patterns for a `Locale` and `Style`,
 it is recommended to use the factory methods given by
 `NumberFormat` for compact number formatting.

 

Below is an example of using the constructor,

 {@snippet lang=java :
 String[] compactPatterns = {"", "", "", "a lot"};
 NumberFormat fmt = new CompactNumberFormat("00", DecimalFormatSymbols.getInstance(Locale.US), compactPatterns);
 fmt.format(1); // returns "01"
 fmt.format(1000); // returns "a lot"
 }

**参数**

- **decimalPattern** — a `#patterns decimal pattern` for general number formatting
- **symbols** — the set of symbols to be used
- **compactPatterns** — an array of `#compact_number_patterns compact number patterns`

**异常**

- **NullPointerException** — if any of the given arguments is `null`
- **IllegalArgumentException** — if the given `decimalPattern` or the `compactPatterns` array contains an invalid pattern or if a `null` appears in the array of compact patterns

**参见**

- DecimalFormat#DecimalFormat(java.lang.String, DecimalFormatSymbols)
- DecimalFormatSymbols
