---
id: "java-en-function-xmleventfactory-createendelement"
language: "java"
lang: "en"
category: "function"
name: "XMLEventFactory.createEndElement"
signature: "public abstract EndElement createEndElement(QName name, Iterator<? extends Namespace> namespaces)"
title: "XMLEventFactory.createEndElement"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventFactory.createEndElement

```java
public abstract EndElement createEndElement(QName name, Iterator<? extends Namespace> namespaces)
```

Create a new EndElement

**参数**

- **name** — the qualified name of the EndElement
- **namespaces** — an optional unordered set of objects that implement Namespace that have gone out of scope, may be null

**返回**

- an instance of the requested EndElement
