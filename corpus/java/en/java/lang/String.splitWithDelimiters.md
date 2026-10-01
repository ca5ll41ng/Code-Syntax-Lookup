---
id: "java-en-function-string-splitwithdelimiters"
language: "java"
lang: "en"
category: "function"
name: "String.splitWithDelimiters"
signature: "public String[] splitWithDelimiters(String regex, int limit)"
title: "String.splitWithDelimiters"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.splitWithDelimiters

```java
public String[] splitWithDelimiters(String regex, int limit)
```

Splits this string around matches of the given regular expression and
 returns both the strings and the matching delimiters.

 

 The array returned by this method contains each substring of this
 string that is terminated by another substring that matches the given
 expression or is terminated by the end of the string.
 Each substring is immediately followed by the subsequence (the delimiter)
 that matches the given expression, except for the last
 substring, which is not followed by anything.
 The substrings in the array and the delimiters are in the order in which
 they occur in the input.
 If the expression does not match any part of the input then the resulting
 array has just one element, namely this string.

 

 When there is a positive-width match at the beginning of this
 string then an empty leading substring is included at the beginning
 of the resulting array. A zero-width match at the beginning however
 never produces such empty leading substring nor the empty delimiter.

 

 The `limit` parameter controls the number of times the
 pattern is applied and therefore affects the length of the resulting
 array.
 
    
-  If the limit is positive then the pattern will be applied
    at most limit&nbsp;-&nbsp;1 times, the array's length will be
    no greater than 2 &times; limit - 1, and the array's last
    entry will contain all input beyond the last matched delimiter.

    
-  If the limit is zero then the pattern will be applied as
    many times as possible, the array can have any length, and trailing
    empty strings will be discarded.

    
-  If the limit is negative then the pattern will be applied
    as many times as possible and the array can have any length.
 

 

 The input `"boo:::and::foo"`, for example, yields the following
 results with these parameters:

 
 Split example showing regex, limit, and result
 
 
     Regex
     Limit
     Result
 
 
 
 :+
     2
     `{ "boo", ":::", "and::foo" `}
 <!-- : -->
     5
     `{ "boo", ":::", "and", "::", "foo" `}
 <!-- : -->
     -1
     `{ "boo", ":::", "and", "::", "foo" `}
 o
     5
     `{ "b", "o", "", "o", ":::and::f", "o", "", "o", "" `}
 <!-- o -->
     -1
     `{ "b", "o", "", "o", ":::and::f", "o", "", "o", "" `}
 <!-- o -->
     0
     `{ "b", "o", "", "o", ":::and::f", "o", "", "o" `}
 
 

 str.`splitWithDelimiters(`regex`,`&nbsp;n`)`
 yields the same result as the expression

 
 
 `java.util.regex.Pattern`.`compile(String) compile`(regex).`splitWithDelimiters(CharSequence,int) splitWithDelimiters`(str,&nbsp;n)

**参数**

- **regex** — the delimiting regular expression
- **limit** — the result threshold, as described above

**返回**

- the array of strings computed by splitting this string around matches of the given regular expression, alternating substrings and matching delimiters

> *Since 21*
