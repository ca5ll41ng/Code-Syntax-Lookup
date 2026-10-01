---
id: "java-en-function-charset-canencode"
language: "java"
lang: "en"
category: "function"
name: "Charset.canEncode"
signature: "public boolean canEncode()"
title: "Charset.canEncode"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.canEncode

```java
public boolean canEncode()
```

Tells whether or not this charset supports encoding.

 

 Nearly all charsets support encoding.  The primary exceptions are
 special-purpose auto-detect charsets whose decoders can determine
 which of several possible encoding schemes is in use by examining the
 input byte sequence.  Such charsets do not support encoding because
 there is no way to determine which encoding should be used on output.
 Implementations of such charsets should override this method to return
 `false`.

**返回**

- `true` if, and only if, this charset supports encoding
