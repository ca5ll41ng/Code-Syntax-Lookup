---
id: "java-en-function-xmlstreamreader-getnamespacecontext"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getNamespaceContext"
signature: "public NamespaceContext getNamespaceContext()"
title: "XMLStreamReader.getNamespaceContext"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getNamespaceContext

```java
public NamespaceContext getNamespaceContext()
```

Returns a read only namespace context for the current
 position.  The context is transient and only valid until
 a call to next() changes the state of the reader.

**返回**

- return a namespace context
