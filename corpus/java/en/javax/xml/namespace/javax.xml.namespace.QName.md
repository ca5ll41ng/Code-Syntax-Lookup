---
id: "java-en-function-javax-xml-namespace-qname"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.namespace.QName"
title: "QName"
directive: "type"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/QName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QName

QName represents a **qualified name**
 as defined in the XML specifications: XML Schema Part2:
 Datatypes specification, Namespaces
 in XML.

 

The value of a QName contains a **Namespace
 URI**, **local part** and
 **prefix**.

 

The prefix is included in QName to retain lexical
 information **when present** in an `javax.xml.transform.Source XML input source`. The prefix is
 **NOT** used in `equals(Object)
 QName.equals` or to compute the `hashCode()
 QName.hashCode`.  Equality and the hash code are defined using
 **only** the Namespace URI and local part.

 

If not specified, the Namespace URI is set to `NULL_NS_URI XMLConstants.NULL_NS_URI`.
 If not specified, the prefix is set to `DEFAULT_NS_PREFIX
 XMLConstants.DEFAULT_NS_PREFIX`.

 

QName is immutable.

**参见**

- XML Schema Part2: Datatypes specification
- Namespaces in XML

> *Since 1.5*
