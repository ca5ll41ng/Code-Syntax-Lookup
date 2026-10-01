---
id: "java-en-function-string-tolowercase"
language: "java"
lang: "en"
category: "function"
name: "String.toLowerCase"
signature: "public String toLowerCase(Locale locale)"
title: "String.toLowerCase"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.toLowerCase

```java
public String toLowerCase(Locale locale)
```

Converts all of the characters in this `String` to lower
 case using the rules of the given `Locale`.  Case mapping is based
 on the Unicode Standard version specified by the `java.lang.Character Character`
 class. Since case mappings are not always 1:1 char mappings, the resulting `String`
 and this `String` may differ in length.
 

 Examples of lowercase mappings are in the following table:
 
 Lowercase mapping examples showing language code of locale, upper case, lower case, and description
 
 
   Language Code of Locale
   Upper Case
   Lower Case
   Description
 
 
 
 
   tr (Turkish)
   &#92;u0130
   &#92;u0069
   capital letter I with dot above -&gt; small letter i
 
 
   tr (Turkish)
   &#92;u0049
   &#92;u0131
   capital letter I -&gt; small letter dotless i 
 
 
   (all)
   French Fries
   french fries
   lowercased all chars in String
 
 
   (all)
   
       &Iota;&Chi;&Theta;&Upsilon;&Sigma;
   &iota;&chi;&theta;&upsilon;&sigmaf;
   lowercased all chars in String

**参数**

- **locale** — use the case transformation rules for this locale

**返回**

- the `String`, converted to lowercase.

**参见**

- java.lang.String#toLowerCase()
- java.lang.String#toUpperCase()
- java.lang.String#toUpperCase(Locale)

> *Since 1.1*
