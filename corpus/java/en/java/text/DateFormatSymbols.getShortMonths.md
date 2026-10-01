---
id: "java-en-function-dateformatsymbols-getshortmonths"
language: "java"
lang: "en"
category: "function"
name: "DateFormatSymbols.getShortMonths"
signature: "public String[] getShortMonths()"
title: "DateFormatSymbols.getShortMonths"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatSymbols.getShortMonths

```java
public String[] getShortMonths()
```

Gets short month strings. For example: "Jan", "Feb", etc.
 An array with either 12 or 13 elements will be returned depending
 on whether or not `UNDECIMBER Calendar.UNDECIMBER`
 is supported. Use
 `JANUARY Calendar.JANUARY`,
 `FEBRUARY Calendar.FEBRUARY`,
 etc. to index the result array.

 

If the language requires different forms for formatting and
 stand-alone usages, this method returns short month names in
 the formatting form. For example, the preferred abbreviation
 for January in the Catalan language is de gen. in the
 formatting form, while it is gen. in the stand-alone
 form. This method returns `"de gen."` in this case. Refer
 to the 
 Calendar Elements in the Unicode Locale Data Markup Language
 (LDML) specification for more details.

 `UNDECIMBER Calendar.UNDECIMBER` is supported.
      Unicode Locale Data Markup Language (LDML)

**返回**

- the short month strings.
