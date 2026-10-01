---
id: "java-en-function-stringbuffer-compareto"
language: "java"
lang: "en"
category: "function"
name: "StringBuffer.compareTo"
signature: "public synchronized int compareTo(StringBuffer another)"
title: "StringBuffer.compareTo"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StringBuffer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringBuffer.compareTo

```java
public synchronized int compareTo(StringBuffer another)
```

Compares two `StringBuffer` instances lexicographically. This method
 follows the same rules for lexicographical comparison as defined in the
 `compare(java.lang.CharSequence,
 java.lang.CharSequence)  CharSequence.compare` method.

 

 For finer-grained, locale-sensitive String comparison, refer to
 `java.text.Collator`.

 This method synchronizes on `this`, the current object, but not
 `StringBuffer another` with which `this StringBuffer` is compared.

**参数**

- **another** — the `StringBuffer` to be compared with

**返回**

- the value `0` if this `StringBuffer` contains the same character sequence as that of the argument `StringBuffer`; a negative integer if this `StringBuffer` is lexicographically less than the `StringBuffer` argument; or a positive integer if this `StringBuffer` is lexicographically greater than the `StringBuffer` argument.

> *Since 11*
