---
id: "java-en-function-streamresult-setoutputstream"
language: "java"
lang: "en"
category: "function"
name: "StreamResult.setOutputStream"
signature: "public void setOutputStream(OutputStream outputStream)"
title: "StreamResult.setOutputStream"
directive: "method"
module: "java.xml/javax.xml.transform.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stream/StreamResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamResult.setOutputStream

```java
public void setOutputStream(OutputStream outputStream)
```

Set the ByteStream that is to be written to.  Normally,
 a stream should be used rather than a reader, so that
 the transformer may use instructions contained in the
 transformation instructions to control the encoding.

**参数**

- **outputStream** — A valid OutputStream reference.
