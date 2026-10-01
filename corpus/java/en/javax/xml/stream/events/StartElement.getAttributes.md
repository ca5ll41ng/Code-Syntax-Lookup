---
id: "java-en-function-startelement-getattributes"
language: "java"
lang: "en"
category: "function"
name: "StartElement.getAttributes"
signature: "public Iterator<Attribute> getAttributes()"
title: "StartElement.getAttributes"
directive: "method"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/StartElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StartElement.getAttributes

```java
public Iterator<Attribute> getAttributes()
```

Returns an Iterator of non-namespace attributes declared on this START_ELEMENT.
 Returns an empty iterator if there are no attributes.
 The iterator must contain only implementations of the
 `Attribute` interface.
 Attributes are fundamentally unordered and may be reported
 in any order.

**返回**

- a readonly Iterator over Attribute interfaces, or an empty iterator
