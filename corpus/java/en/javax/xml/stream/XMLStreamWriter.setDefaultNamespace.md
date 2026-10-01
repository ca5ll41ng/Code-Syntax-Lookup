---
id: "java-en-function-xmlstreamwriter-setdefaultnamespace"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamWriter.setDefaultNamespace"
signature: "public void setDefaultNamespace(String uri) throws XMLStreamException"
title: "XMLStreamWriter.setDefaultNamespace"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter.setDefaultNamespace

```java
public void setDefaultNamespace(String uri) throws XMLStreamException
```

Binds a URI to the default namespace
 This URI is bound
 in the scope of the current START_ELEMENT / END_ELEMENT pair.
 If this method is called before a START_ELEMENT has been written
 the uri is bound in the root scope.

**参数**

- **uri** — the uri to bind to the default namespace, may be null

**异常**

- **XMLStreamException** — if an error occurs
