---
id: "java-en-function-streamsource-setsystemid"
language: "java"
lang: "en"
category: "function"
name: "StreamSource.setSystemId"
signature: "public void setSystemId(String systemId)"
title: "StreamSource.setSystemId"
directive: "method"
module: "java.xml/javax.xml.transform.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stream/StreamSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamSource.setSystemId

```java
public void setSystemId(String systemId)
```

Set the system identifier for this Source.

 

The system identifier is optional if there is a byte stream
 or a character stream, but it is still useful to provide one,
 since the application can use it to resolve relative URIs
 and can include it in error messages and warnings (the parser
 will attempt to open a connection to the URI only if
 there is no byte stream or character stream specified).

**参数**

- **systemId** — The system identifier as a URL string.
