---
id: "java-en-function-startelement-getnamespacecontext"
language: "java"
lang: "en"
category: "function"
name: "StartElement.getNamespaceContext"
signature: "public NamespaceContext getNamespaceContext()"
title: "StartElement.getNamespaceContext"
directive: "method"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/StartElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StartElement.getNamespaceContext

```java
public NamespaceContext getNamespaceContext()
```

Gets a read-only namespace context. If no context is
 available this method will return an empty namespace context.
 The NamespaceContext contains information about all namespaces
 in scope for this StartElement.

**返回**

- the current namespace context
