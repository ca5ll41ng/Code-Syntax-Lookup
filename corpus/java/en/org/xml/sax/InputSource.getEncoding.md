---
id: "java-en-function-inputsource-getencoding"
language: "java"
lang: "en"
category: "function"
name: "InputSource.getEncoding"
signature: "public String getEncoding ()"
title: "InputSource.getEncoding"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/InputSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputSource.getEncoding

```java
public String getEncoding ()
```

Get the character encoding for a byte stream or URI.
 This value will be ignored when the application provides a
 character stream.

**返回**

- The encoding, or null if none was supplied.

**参见**

- #setByteStream
- #getSystemId
- #getByteStream
