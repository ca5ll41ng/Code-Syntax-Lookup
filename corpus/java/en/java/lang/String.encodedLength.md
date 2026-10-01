---
id: "java-en-function-string-encodedlength"
language: "java"
lang: "en"
category: "function"
name: "String.encodedLength"
signature: "public int encodedLength(Charset cs)"
title: "String.encodedLength"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.encodedLength

```java
public int encodedLength(Charset cs)
```

{@return the length in bytes of this `String` encoded with the given `Charset`}

 

The returned length accounts for the replacement of malformed-input and unmappable-character
 sequences with the charset's default replacement byte array. The result will be the same value
 as `getBytes(Charset) getBytes(cs).length`.

          getBytes(cs).length`.

**参数**

- **cs** — The `Charset` used to the compute the length

> *Since 27*
