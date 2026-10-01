---
id: "java-en-function-inputsource-getbytestream"
language: "java"
lang: "en"
category: "function"
name: "InputSource.getByteStream"
signature: "public InputStream getByteStream ()"
title: "InputSource.getByteStream"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/InputSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputSource.getByteStream

```java
public InputStream getByteStream ()
```

Get the byte stream for this input source.

 

The getEncoding method will return the character
 encoding for this byte stream, or null if unknown.

**返回**

- The byte stream, or null if none was supplied.

**参见**

- #getEncoding
- #setByteStream
