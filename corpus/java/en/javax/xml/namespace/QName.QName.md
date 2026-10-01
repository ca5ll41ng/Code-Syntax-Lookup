---
id: "java-en-function-qname-qname"
language: "java"
lang: "en"
category: "function"
name: "QName.QName"
signature: "public QName(final String namespaceURI, final String localPart)"
title: "QName.QName"
directive: "method"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/QName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QName.QName

```java
public QName(final String namespaceURI, final String localPart)
```

QName constructor specifying the Namespace URI
 and local part.

 

If the Namespace URI is null, it is set to
 `NULL_NS_URI
 XMLConstants.NULL_NS_URI`.  This value represents no
 explicitly defined Namespace as defined by the Namespaces
 in XML specification.  This action preserves compatible
 behavior with QName 1.0.  Explicitly providing the `NULL_NS_URI
 XMLConstants.NULL_NS_URI` value is the preferred coding
 style.

 

If the local part is null an
 IllegalArgumentException is thrown.
 A local part of "" is allowed to preserve
 compatible behavior with QName 1.0. 

 

When using this constructor, the prefix is set to `DEFAULT_NS_PREFIX
 XMLConstants.DEFAULT_NS_PREFIX`.

 

The Namespace URI is not validated as a
 URI reference.
 The local part is not validated as a
 NCName
 as specified in Namespaces
 in XML.

**参数**

- **namespaceURI** — Namespace URI of the QName
- **localPart** — local part of the QName

**异常**

- **IllegalArgumentException** — When localPart is null

**参见**

- #QName(String namespaceURI, String localPart, String prefix) QName(String namespaceURI, String localPart, String prefix)
