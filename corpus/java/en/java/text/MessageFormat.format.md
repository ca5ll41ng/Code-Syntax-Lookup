---
id: "java-en-function-messageformat-format"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.format"
signature: "public final StringBuffer format(Object[] arguments, StringBuffer result, FieldPosition pos)"
title: "MessageFormat.format"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.format

```java
public final StringBuffer format(Object[] arguments, StringBuffer result, FieldPosition pos)
```

Formats an array of objects and appends the `MessageFormat`'s
 pattern, with format elements replaced by the formatted objects, to the
 provided `StringBuffer`.
 

 The text substituted for the individual format elements is derived from
 the current subformat of the format element and the
 `arguments` element at the format element's argument index
 as indicated by the first matching line of the following table. An
 argument is unavailable if `arguments` is
 `null` or has fewer than argumentIndex+1 elements.

 
 Examples of subformat, argument, and formatted text
 
    
       Subformat
       Argument
       Formatted Text
 
 
    
       any
       unavailable
       "{" + argumentIndex + "}"
    
       `null`
       `"null"`
    
       `instanceof ChoiceFormat`
       any
       subformat.format(argument).indexOf('{') &gt;= 0 ?

           (new MessageFormat(subformat.format(argument), getLocale())).format(argument) :
           subformat.format(argument)
    
       `!= null`
       any
       `subformat.format(argument)`
    
       `null`
       `instanceof Number`
       `NumberFormat.getInstance(getLocale()).format(argument)`
    
       `instanceof Date`
       `DateFormat.getDateTimeInstance(DateFormat.SHORT, DateFormat.SHORT, getLocale()).format(argument)`
    
       `instanceof String`
       `argument`
    
       any
       `argument.toString()`
 
 
 

 If `pos` is non-null, and refers to
 `Field.ARGUMENT`, the location of the first formatted
 string will be returned.

**参数**

- **arguments** — an array of objects to be formatted and substituted.
- **result** — where text is appended.
- **pos** — keeps track on the position of the first replaced argument in the output string.

**返回**

- the string buffer passed in as `result`, with formatted text appended

**异常**

- **IllegalArgumentException** — if an argument in the `arguments` array is not of the type expected by the format element(s) that use it.
- **NullPointerException** — if `result` is `null` or if the `MessageFormat` instance that calls this method has locale set to null, and the implementation uses a locale-dependent subformat.
