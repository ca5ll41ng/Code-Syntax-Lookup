---
id: "java-en-function-dateformatsymbols-getmonths"
language: "java"
lang: "en"
category: "function"
name: "DateFormatSymbols.getMonths"
signature: "public String[] getMonths()"
title: "DateFormatSymbols.getMonths"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatSymbols.getMonths

```java
public String[] getMonths()
```

Gets month strings. For example: "January", "February", etc.
 An array with either 12 or 13 elements will be returned depending
 on whether or not `UNDECIMBER Calendar.UNDECIMBER`
 is supported. Use
 `JANUARY Calendar.JANUARY`,
 `FEBRUARY Calendar.FEBRUARY`,
 etc. to index the result array.

 

If the language requires different forms for formatting and
 stand-alone usages, this method returns month names in the
 formatting form. For example, the preferred month name for
 January in the Czech language is ledna in the
 formatting form, while it is leden in the stand-alone
 form. This method returns `"ledna"` in this case. Refer
 to the 
 Calendar Elements in the Unicode Locale Data Markup Language
 (LDML) specification for more details.

 `UNDECIMBER Calendar.UNDECIMBER` is supported.
      Unicode Locale Data Markup Language (LDML)

**返回**

- the month strings.
