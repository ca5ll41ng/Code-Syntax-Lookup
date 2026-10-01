---
id: "java-en-function-xmlstreamwriter-writeemptyelement"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamWriter.writeEmptyElement"
signature: "public void writeEmptyElement(String namespaceURI, String localName) throws XMLStreamException"
title: "XMLStreamWriter.writeEmptyElement"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter.writeEmptyElement

```java
public void writeEmptyElement(String namespaceURI, String localName) throws XMLStreamException
```

Writes an empty element tag to the output

**参数**

- **namespaceURI** — the uri to bind the tag to, may not be null
- **localName** — local name of the tag, may not be null

**异常**

- **XMLStreamException** — if the namespace URI has not been bound to a prefix and javax.xml.stream.isRepairingNamespaces has not been set to true
