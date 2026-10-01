---
id: "java-en-function-xmlstreamreader-require"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.require"
signature: "public void require(int type, String namespaceURI, String localName) throws XMLStreamException"
title: "XMLStreamReader.require"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.require

```java
public void require(int type, String namespaceURI, String localName) throws XMLStreamException
```

Test if the current event is of the given type and if the namespace and name match the current
 namespace and name of the current event.  If the namespaceURI is null it is not checked for equality,
 if the localName is null it is not checked for equality.

**参数**

- **type** — the event type
- **namespaceURI** — the uri of the event, may be null
- **localName** — the localName of the event, may be null

**异常**

- **XMLStreamException** — if the required values are not matched.
