---
id: "java-en-function-pattern-splitwithdelimiters"
language: "java"
lang: "en"
category: "function"
name: "Pattern.splitWithDelimiters"
signature: "public String[] splitWithDelimiters(CharSequence input, int limit)"
title: "Pattern.splitWithDelimiters"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.splitWithDelimiters

```java
public String[] splitWithDelimiters(CharSequence input, int limit)
```

Splits the given input sequence around matches of this pattern and
 returns both the strings and the matching delimiters.

 

 The array returned by this method contains each substring of the
 input sequence that is terminated by another subsequence that matches
 this pattern or is terminated by the end of the input sequence.
 Each substring is immediately followed by the subsequence (the delimiter)
 that matches this pattern, except for the last substring, which
 is not followed by anything.
 The substrings in the array and the delimiters are in the order in which
 they occur in the input.
 If this pattern does not match any subsequence of the input then the
 resulting array has just one element, namely the input sequence in string
 form.

 

 When there is a positive-width match at the beginning of the input
 sequence then an empty leading substring is included at the beginning
 of the resulting array.
 A zero-width match at the beginning however never produces such empty
 leading substring nor the empty delimiter.

 

 The `limit` parameter controls the number of times the
 pattern is applied and therefore affects the length of the resulting
 array.
 
    
-  If the limit is positive then the pattern will be applied
    at most limit - 1 times, the array's length will be
    no greater than 2 &times; limit - 1, and the array's last
    entry will contain all input beyond the last matched delimiter.

    
-  If the limit is zero then the pattern will be applied as
    many times as possible, the array can have any length, and trailing
    empty strings, whether substrings or delimiters, will be discarded.

    
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

**参数**

- **input** — The character sequence to be split
- **limit** — The result threshold, as described above

**返回**

- The array of strings computed by splitting the input around matches of this pattern, alternating substrings and matching delimiters

> *Since 21*
