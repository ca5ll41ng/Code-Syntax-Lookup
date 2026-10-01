---
id: "java-en-function-xmleventfactory-createstartelement"
language: "java"
lang: "en"
category: "function"
name: "XMLEventFactory.createStartElement"
signature: "public abstract StartElement createStartElement(QName name, Iterator<? extends Attribute> attributes, Iterator<? extends Namespace> namespaces)"
title: "XMLEventFactory.createStartElement"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventFactory.createStartElement

```java
public abstract StartElement createStartElement(QName name, Iterator<? extends Attribute> attributes, Iterator<? extends Namespace> namespaces)
```

Create a new StartElement.  Namespaces can be added to this StartElement
 by passing in an Iterator that walks over a set of Namespace interfaces.
 Attributes can be added to this StartElement by passing an iterator
 that walks over a set of Attribute interfaces.

**参数**

- **name** — the qualified name of the attribute, may not be null
- **attributes** — an optional unordered set of objects that implement Attribute to add to the new StartElement, may be null
- **namespaces** — an optional unordered set of objects that implement Namespace to add to the new StartElement, may be null

**返回**

- an instance of the requested StartElement
