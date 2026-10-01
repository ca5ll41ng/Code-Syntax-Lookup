---
id: "java-en-function-xmlstreamwriter-setnamespacecontext"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamWriter.setNamespaceContext"
signature: "public void setNamespaceContext(NamespaceContext context) throws XMLStreamException"
title: "XMLStreamWriter.setNamespaceContext"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter.setNamespaceContext

```java
public void setNamespaceContext(NamespaceContext context) throws XMLStreamException
```

Sets the current namespace context for prefix and uri bindings.
 This context becomes the root namespace context for writing and
 will replace the current root namespace context.  Subsequent calls
 to setPrefix and setDefaultNamespace will bind namespaces using
 the context passed to the method as the root context for resolving
 namespaces.  This method may only be called once at the start of
 the document.  It does not cause the namespaces to be declared.
 If a namespace URI to prefix mapping is found in the namespace
 context it is treated as declared and the prefix may be used
 by the StreamWriter.

**参数**

- **context** — the namespace context to use for this writer, may not be null

**异常**

- **XMLStreamException** — if an error occurs
