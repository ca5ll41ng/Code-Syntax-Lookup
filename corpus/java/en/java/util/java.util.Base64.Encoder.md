---
id: "java-en-function-java-util-base64-encoder"
language: "java"
lang: "en"
category: "function"
name: "java.util.Base64.Encoder"
title: "Encoder"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Base64.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Encoder

This class implements an encoder for encoding byte data using
 the Base64 encoding scheme as specified in RFC 4648 and RFC 2045.

 

 Instances of `Encoder` class are safe for use by
 multiple concurrent threads.

 

 Unless otherwise noted, passing a `null` argument to
 a method of this class will cause a
 `java.lang.NullPointerException NullPointerException` to
 be thrown.
 

 If the encoded byte output of the needed size can not
     be allocated, the encode methods of this class will
     cause an `java.lang.OutOfMemoryError OutOfMemoryError`
     to be thrown.

**参见**

- Decoder

> *Since 1.8*
