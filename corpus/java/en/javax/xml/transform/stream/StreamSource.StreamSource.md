---
id: "java-en-function-streamsource-streamsource"
language: "java"
lang: "en"
category: "function"
name: "StreamSource.StreamSource"
signature: "public StreamSource()"
title: "StreamSource.StreamSource"
directive: "method"
module: "java.xml/javax.xml.transform.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stream/StreamSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamSource.StreamSource

```java
public StreamSource()
```

Zero-argument default constructor.  If this constructor is used, and
 no Stream source is set using
 `setInputStream` or
 `setReader`, then the
 Transformer will
 create an empty source `java.io.InputStream` using
 `InputStream`.

**参见**

- javax.xml.transform.Transformer#transform(Source xmlSource, Result outputTarget)
