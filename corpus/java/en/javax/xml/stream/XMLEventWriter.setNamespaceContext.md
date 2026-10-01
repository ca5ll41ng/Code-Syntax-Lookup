---
id: "java-en-function-xmleventwriter-setnamespacecontext"
language: "java"
lang: "en"
category: "function"
name: "XMLEventWriter.setNamespaceContext"
signature: "public void setNamespaceContext(NamespaceContext context) throws XMLStreamException"
title: "XMLEventWriter.setNamespaceContext"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventWriter.setNamespaceContext

```java
public void setNamespaceContext(NamespaceContext context) throws XMLStreamException
```

Sets the current namespace context for prefix and uri bindings.
 This context becomes the root namespace context for writing and
 will replace the current root namespace context.  Subsequent calls
 to setPrefix and setDefaultNamespace will bind namespaces using
 the context passed to the method as the root context for resolving
 namespaces.

**参数**

- **context** — the namespace context to use for this writer

**异常**

- **XMLStreamException** — if an error occurs
