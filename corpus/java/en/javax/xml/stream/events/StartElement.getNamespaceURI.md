---
id: "java-en-function-startelement-getnamespaceuri"
language: "java"
lang: "en"
category: "function"
name: "StartElement.getNamespaceURI"
signature: "public String getNamespaceURI(String prefix)"
title: "StartElement.getNamespaceURI"
directive: "method"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/StartElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StartElement.getNamespaceURI

```java
public String getNamespaceURI(String prefix)
```

Gets the value that the prefix is bound to in the
 context of this element.  Returns null if
 the prefix is not bound in this context

**参数**

- **prefix** — the prefix to lookup

**返回**

- the uri bound to the prefix or null
