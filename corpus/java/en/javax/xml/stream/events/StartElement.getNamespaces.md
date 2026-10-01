---
id: "java-en-function-startelement-getnamespaces"
language: "java"
lang: "en"
category: "function"
name: "StartElement.getNamespaces"
signature: "public Iterator<Namespace> getNamespaces()"
title: "StartElement.getNamespaces"
directive: "method"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/StartElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StartElement.getNamespaces

```java
public Iterator<Namespace> getNamespaces()
```

Returns an Iterator of namespaces declared on this element.
 This Iterator does not contain previously declared namespaces
 unless they appear on the current START_ELEMENT.
 Therefore this list may contain redeclared namespaces and duplicate namespace
 declarations. Use the getNamespaceContext() method to get the
 current context of namespace declarations.

 

The iterator must contain only implementations of the
 `Namespace` interface.

 

A `Namespace` is an `Attribute`.  One
 can iterate over a list of namespaces as a list of attributes.
 However this method returns only the list of namespaces
 declared on this START_ELEMENT and does not
 include the attributes declared on this START_ELEMENT.

 Returns an empty iterator if there are no namespaces.

**返回**

- a readonly Iterator over Namespace interfaces, or an empty iterator
