---
id: "java-en-function-charset-encode"
language: "java"
lang: "en"
category: "function"
name: "Charset.encode"
signature: "public final ByteBuffer encode(CharBuffer cb)"
title: "Charset.encode"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.encode

```java
public final ByteBuffer encode(CharBuffer cb)
```

Convenience method that encodes Unicode characters into bytes in this
 charset.

 

 An invocation of this method upon a charset `cs` returns the
 same result as the expression

 {@snippet lang=java :
     cs.newEncoder()
       .onMalformedInput(CodingErrorAction.REPLACE)
       .onUnmappableCharacter(CodingErrorAction.REPLACE)
       .encode(bb);
 }

 except that it is potentially more efficient because it can cache
 encoders between successive invocations.

 

 This method always replaces malformed-input and unmappable-character
 sequences with this charset's default replacement string.  In order to
 detect such sequences, use the `encode` method directly.

**参数**

- **cb** — The char buffer to be encoded

**返回**

- A byte buffer containing the encoded characters
