---
id: "java-en-function-java-util-base64-decoder"
language: "java"
lang: "en"
category: "function"
name: "java.util.Base64.Decoder"
title: "Decoder"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Base64.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Decoder

This class implements a decoder for decoding byte data using the
 Base64 encoding scheme as specified in RFC 4648 and RFC 2045.

 

 The Base64 padding character `'='` is accepted and
 interpreted as the end of the encoded byte data, but is not
 required. So if the final unit of the encoded byte data only has
 two or three Base64 characters (without the corresponding padding
 character(s) padded), they are decoded as if followed by padding
 character(s). If there is a padding character present in the
 final unit, the correct number of padding character(s) must be
 present, otherwise `IllegalArgumentException` (
 `IOException` when reading from a Base64 stream) is thrown
 during decoding.

 

 Instances of `Decoder` class are safe for use by
 multiple concurrent threads.

 

 Unless otherwise noted, passing a `null` argument to
 a method of this class will cause a
 `java.lang.NullPointerException NullPointerException` to
 be thrown.
 

 If the decoded byte output of the needed size can not
     be allocated, the decode methods of this class will
     cause an `java.lang.OutOfMemoryError OutOfMemoryError`
     to be thrown.

**参见**

- Encoder

> *Since 1.8*
