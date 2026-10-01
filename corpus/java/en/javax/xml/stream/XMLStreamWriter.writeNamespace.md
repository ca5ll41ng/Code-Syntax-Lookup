---
id: "java-en-function-xmlstreamwriter-writenamespace"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamWriter.writeNamespace"
signature: "public void writeNamespace(String prefix, String namespaceURI) throws XMLStreamException"
title: "XMLStreamWriter.writeNamespace"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter.writeNamespace

```java
public void writeNamespace(String prefix, String namespaceURI) throws XMLStreamException
```

Writes a namespace to the output stream
 If the prefix argument to this method is the empty string,
 "xmlns", or null this method will delegate to writeDefaultNamespace

**参数**

- **prefix** — the prefix to bind this namespace to
- **namespaceURI** — the uri to bind the prefix to

**异常**

- **IllegalStateException** — if the current state does not allow Namespace writing
- **XMLStreamException** — if an error occurs
