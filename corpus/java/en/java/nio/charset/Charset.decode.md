---
id: "java-en-function-charset-decode"
language: "java"
lang: "en"
category: "function"
name: "Charset.decode"
signature: "public final CharBuffer decode(ByteBuffer bb)"
title: "Charset.decode"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.decode

```java
public final CharBuffer decode(ByteBuffer bb)
```

Convenience method that decodes bytes in this charset into Unicode
 characters.

 

 An invocation of this method upon a charset `cs` returns the
 same result as the expression

 {@snippet lang=java :
     cs.newDecoder()
       .onMalformedInput(CodingErrorAction.REPLACE)
       .onUnmappableCharacter(CodingErrorAction.REPLACE)
       .decode(bb);
 }

 except that it is potentially more efficient because it can cache
 decoders between successive invocations.

 

 This method always replaces malformed-input and unmappable-character
 sequences with this charset's default replacement byte array.  In order
 to detect such sequences, use the `decode` method directly.

**参数**

- **bb** — The byte buffer to be decoded

**返回**

- A char buffer containing the decoded characters
