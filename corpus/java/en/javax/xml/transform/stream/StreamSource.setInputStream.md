---
id: "java-en-function-streamsource-setinputstream"
language: "java"
lang: "en"
category: "function"
name: "StreamSource.setInputStream"
signature: "public void setInputStream(InputStream inputStream)"
title: "StreamSource.setInputStream"
directive: "method"
module: "java.xml/javax.xml.transform.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stream/StreamSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamSource.setInputStream

```java
public void setInputStream(InputStream inputStream)
```

Set the byte stream to be used as input.  Normally,
 a stream should be used rather than a reader, so that
 the XML parser can resolve character encoding specified
 by the XML declaration.

 

If this Source object is used to process a stylesheet, normally
 setSystemId should also be called, so that relative URL references
 can be resolved.

**参数**

- **inputStream** — A valid InputStream reference to an XML stream.
