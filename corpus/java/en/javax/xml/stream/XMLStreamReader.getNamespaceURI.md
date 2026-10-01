---
id: "java-en-function-xmlstreamreader-getnamespaceuri"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getNamespaceURI"
signature: "public String getNamespaceURI(String prefix)"
title: "XMLStreamReader.getNamespaceURI"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getNamespaceURI

```java
public String getNamespaceURI(String prefix)
```

Return the uri for the given prefix.
 The uri returned depends on the current state of the processor.

 

**NOTE:**The 'xml' prefix is bound as defined in
 Namespaces in XML
 specification to "http://www.w3.org/XML/1998/namespace".

 

**NOTE:** The 'xmlns' prefix must be resolved to following namespace
 http://www.w3.org/2000/xmlns/

**参数**

- **prefix** — The prefix to lookup, may not be null

**返回**

- the uri bound to the given prefix or null if it is not bound

**异常**

- **IllegalArgumentException** — if the prefix is null
