---
id: "java-en-function-xmlstreamwriter-writeattribute"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamWriter.writeAttribute"
signature: "public void writeAttribute(String localName, String value) throws XMLStreamException"
title: "XMLStreamWriter.writeAttribute"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter.writeAttribute

```java
public void writeAttribute(String localName, String value) throws XMLStreamException
```

Writes an attribute to the output stream without
 a prefix.

**参数**

- **localName** — the local name of the attribute
- **value** — the value of the attribute

**异常**

- **IllegalStateException** — if the current state does not allow Attribute writing
- **XMLStreamException** — if an error occurs
