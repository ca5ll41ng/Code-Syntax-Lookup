---
id: "java-en-function-pattern-splitasstream"
language: "java"
lang: "en"
category: "function"
name: "Pattern.splitAsStream"
signature: "public Stream<String> splitAsStream(final CharSequence input)"
title: "Pattern.splitAsStream"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.splitAsStream

```java
public Stream<String> splitAsStream(final CharSequence input)
```

Creates a stream from the given input sequence around matches of this
 pattern.

 

 The stream returned by this method contains each substring of the
 input sequence that is terminated by another subsequence that matches
 this pattern or is terminated by the end of the input sequence.  The
 substrings in the stream are in the order in which they occur in the
 input. Trailing empty strings will be discarded and not encountered in
 the stream.

 

 If this pattern does not match any subsequence of the input then
 the resulting stream has just one element, namely the input sequence in
 string form.

 

 When there is a positive-width match at the beginning of the input
 sequence then an empty leading substring is included at the beginning
 of the stream. A zero-width match at the beginning however never produces
 such empty leading substring.

 

 If the input sequence is mutable, it must remain constant during the
 execution of the terminal stream operation.  Otherwise, the result of the
 terminal stream operation is undefined.

**参数**

- **input** — The character sequence to be split

**返回**

- The stream of strings computed by splitting the input around matches of this pattern

**参见**

- #split(CharSequence)

> *Since 1.8*
