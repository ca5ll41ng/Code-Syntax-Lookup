---
id: "java-en-function-string-touppercase"
language: "java"
lang: "en"
category: "function"
name: "String.toUpperCase"
signature: "public String toUpperCase(Locale locale)"
title: "String.toUpperCase"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.toUpperCase

```java
public String toUpperCase(Locale locale)
```

Converts all of the characters in this `String` to upper
 case using the rules of the given `Locale`. Case mapping is based
 on the Unicode Standard version specified by the `java.lang.Character Character`
 class. Since case mappings are not always 1:1 char mappings, the resulting `String`
 and this `String` may differ in length.
 

 Examples of locale-sensitive and 1:M case mappings are in the following table:
 
 Examples of locale-sensitive and 1:M case mappings. Shows Language code of locale, lower case, upper case, and description.
 
 
   Language Code of Locale
   Lower Case
   Upper Case
   Description
 
 
 
 
   tr (Turkish)
   &#92;u0069
   &#92;u0130
   small letter i -&gt; capital letter I with dot above
 
 
   tr (Turkish)
   &#92;u0131
   &#92;u0049
   small letter dotless i -&gt; capital letter I
 
 
   (all)
   &#92;u00df
   &#92;u0053 &#92;u0053
   small letter sharp s -&gt; two letters: SS
 
 
   (all)
   Fahrvergn&uuml;gen
   FAHRVERGN&Uuml;GEN

**参数**

- **locale** — use the case transformation rules for this locale

**返回**

- the `String`, converted to uppercase.

**参见**

- java.lang.String#toUpperCase()
- java.lang.String#toLowerCase()
- java.lang.String#toLowerCase(Locale)

> *Since 1.1*
