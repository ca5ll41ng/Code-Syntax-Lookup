---
id: "java-en-function-endelement-getnamespaces"
language: "java"
lang: "en"
category: "function"
name: "EndElement.getNamespaces"
signature: "public Iterator<Namespace> getNamespaces()"
title: "EndElement.getNamespaces"
directive: "method"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/EndElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EndElement.getNamespaces

```java
public Iterator<Namespace> getNamespaces()
```

Returns an Iterator of namespaces that have gone out
 of scope.  Returns an empty iterator if no namespaces have gone
 out of scope.

**返回**

- an Iterator over Namespace interfaces, or an empty iterator
