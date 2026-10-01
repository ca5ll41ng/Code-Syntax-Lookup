---
id: "java-en-function-xmleventwriter-setdefaultnamespace"
language: "java"
lang: "en"
category: "function"
name: "XMLEventWriter.setDefaultNamespace"
signature: "public void setDefaultNamespace(String uri) throws XMLStreamException"
title: "XMLEventWriter.setDefaultNamespace"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventWriter.setDefaultNamespace

```java
public void setDefaultNamespace(String uri) throws XMLStreamException
```

Binds a URI to the default namespace
 This URI is bound
 in the scope of the current START_ELEMENT / END_ELEMENT pair.
 If this method is called before a START_ELEMENT has been written
 the uri is bound in the root scope.

**参数**

- **uri** — the uri to bind to the default namespace

**异常**

- **XMLStreamException** — if an error occurs
