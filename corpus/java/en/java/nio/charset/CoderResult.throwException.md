---
id: "java-en-function-coderresult-throwexception"
language: "java"
lang: "en"
category: "function"
name: "CoderResult.throwException"
signature: "public void throwException() throws CharacterCodingException"
title: "CoderResult.throwException"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/CoderResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CoderResult.throwException

```java
public void throwException() throws CharacterCodingException
```

Throws an exception appropriate to the result described by this object.

**异常**

- **BufferUnderflowException** — If this object is `UNDERFLOW`
- **BufferOverflowException** — If this object is `OVERFLOW`
- **MalformedInputException** — If this object represents a malformed-input error; the exception's length value will be that of this object
- **UnmappableCharacterException** — If this object represents an unmappable-character error; the exception's length value will be that of this object
- **CharacterCodingException** — `MalformedInputException` if this object represents a malformed-input error; `UnmappableCharacterException` if this object represents an unmappable-character error
