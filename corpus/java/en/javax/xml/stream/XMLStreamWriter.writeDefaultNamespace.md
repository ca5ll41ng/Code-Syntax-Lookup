---
id: "java-en-function-xmlstreamwriter-writedefaultnamespace"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamWriter.writeDefaultNamespace"
signature: "public void writeDefaultNamespace(String namespaceURI) throws XMLStreamException"
title: "XMLStreamWriter.writeDefaultNamespace"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter.writeDefaultNamespace

```java
public void writeDefaultNamespace(String namespaceURI) throws XMLStreamException
```

Writes the default namespace to the stream

**参数**

- **namespaceURI** — the uri to bind the default namespace to

**异常**

- **IllegalStateException** — if the current state does not allow Namespace writing
- **XMLStreamException** — if an error occurs
