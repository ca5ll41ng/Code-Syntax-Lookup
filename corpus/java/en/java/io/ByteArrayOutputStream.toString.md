---
id: "java-en-function-bytearrayoutputstream-tostring"
language: "java"
lang: "en"
category: "function"
name: "ByteArrayOutputStream.toString"
signature: "public synchronized String toString()"
title: "ByteArrayOutputStream.toString"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayOutputStream.toString

```java
public synchronized String toString()
```

Converts the buffer's contents into a string decoding bytes using the
 default charset. The length of the new `String`
 is a function of the charset, and hence may not be equal to the
 size of the buffer.

 

 This method always replaces malformed-input and unmappable-character
 sequences with the default replacement string for the
 default charset. The `java.nio.charset.CharsetDecoder`
 class should be used when more control over the decoding process is
 required.

**返回**

- String decoded from the buffer's contents.

**参见**

- Charset#defaultCharset()

> *Since 1.1*
