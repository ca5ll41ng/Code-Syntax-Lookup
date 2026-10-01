---
id: "java-en-function-string-translateescapes"
language: "java"
lang: "en"
category: "function"
name: "String.translateEscapes"
signature: "public String translateEscapes()"
title: "String.translateEscapes"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.translateEscapes

```java
public String translateEscapes()
```

Returns a string whose value is this string, with escape sequences
 translated as if in a string literal.
 

 Escape sequences are translated as follows;
 
   Translation
   
   
     Escape
     Name
     Translation
   
   
   
   
     `\u005Cb`
     backspace
     `U+0008`
   
   
     `\u005Ct`
     horizontal tab
     `U+0009`
   
   
     `\u005Cn`
     line feed
     `U+000A`
   
   
     `\u005Cf`
     form feed
     `U+000C`
   
   
     `\u005Cr`
     carriage return
     `U+000D`
   
   
     `\u005Cs`
     space
     `U+0020`
   
   
     `\u005C"`
     double quote
     `U+0022`
   
   
     `\u005C'`
     single quote
     `U+0027`
   
   
     `\u005C\u005C`
     backslash
     `U+005C`
   
   
     `\u005C0 - \u005C377`
     octal escape
     code point equivalents
   
   
     `\u005C
- `
     continuation
     discard
   
   
 

 This method does not translate Unicode escapes such as "`\u005cu2022`".
 Unicode escapes are translated by the Java compiler when reading input characters and
 are not part of the string literal specification.

**返回**

- String with escape sequences translated.

**异常**

- **IllegalArgumentException** — when an escape sequence is malformed.

> *Since 15*
