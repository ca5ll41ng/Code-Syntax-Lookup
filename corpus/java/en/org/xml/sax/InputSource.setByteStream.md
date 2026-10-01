---
id: "java-en-function-inputsource-setbytestream"
language: "java"
lang: "en"
category: "function"
name: "InputSource.setByteStream"
signature: "public void setByteStream (InputStream byteStream)"
title: "InputSource.setByteStream"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/InputSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputSource.setByteStream

```java
public void setByteStream (InputStream byteStream)
```

Set the byte stream for this input source.

 

The SAX parser will ignore this if there is also a character
 stream specified, but it will use a byte stream in preference
 to opening a URI connection itself.

 

If the application knows the character encoding of the
 byte stream, it should set it with the setEncoding method.

**参数**

- **byteStream** — A byte stream containing an XML document or other entity.

**参见**

- #setEncoding
- #getByteStream
- #getEncoding
- java.io.InputStream
