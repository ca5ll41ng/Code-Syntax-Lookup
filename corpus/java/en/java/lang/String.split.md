---
id: "java-en-function-string-split"
language: "java"
lang: "en"
category: "function"
name: "String.split"
signature: "public String[] split(String regex, int limit)"
title: "String.split"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.split

```java
public String[] split(String regex, int limit)
```

Splits this string around matches of the given
 regular expression.

 

 The array returned by this method contains each substring of this
 string that is terminated by another substring that matches the given
 expression or is terminated by the end of the string.  The substrings in
 the array are in the order in which they occur in this string.  If the
 expression does not match any part of the input then the resulting array
 has just one element, namely this string.

 

 When there is a positive-width match at the beginning of this
 string then an empty leading substring is included at the beginning
 of the resulting array. A zero-width match at the beginning however
 never produces such empty leading substring.

 

 The `limit` parameter controls the number of times the
 pattern is applied and therefore affects the length of the resulting
 array.
 
    
- 

    If the limit is positive then the pattern will be applied
    at most limit&nbsp;-&nbsp;1 times, the array's length will be
    no greater than limit, and the array's last entry will contain
    all input beyond the last matched delimiter.

    
- 

    If the limit is zero then the pattern will be applied as
    many times as possible, the array can have any length, and trailing
    empty strings will be discarded.

    
- 

    If the limit is negative then the pattern will be applied
    as many times as possible and the array can have any length.
 

 

 The string `"boo:and:foo"`, for example, yields the
 following results with these parameters:

 
 Split example showing regex, limit, and result
 
 
     Regex
     Limit
     Result
 
 
 
 :
     2
     `{ "boo", "and:foo" `}
 <!-- : -->
     5
     `{ "boo", "and", "foo" `}
 <!-- : -->
     -2
     `{ "boo", "and", "foo" `}
 o
     5
     `{ "b", "", ":and:f", "", "" `}
 <!-- o -->
     -2
     `{ "b", "", ":and:f", "", "" `}
 <!-- o -->
     0
     `{ "b", "", ":and:f" `}
 
 

 

 An invocation of this method of the form
 str.`split(`regex`,`&nbsp;n`)`
 yields the same result as the expression

 
 
 `java.util.regex.Pattern`.`compile(String) compile`(regex).`split(java.lang.CharSequence,int) split`(str,&nbsp;n)

**参数**

- **regex** — the delimiting regular expression
- **limit** — the result threshold, as described above

**返回**

- the array of strings computed by splitting this string around matches of the given regular expression

**异常**

- **PatternSyntaxException** — if the regular expression's syntax is invalid

**参见**

- java.util.regex.Pattern

> *Since 1.4*
