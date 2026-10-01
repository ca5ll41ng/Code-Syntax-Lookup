---
id: "java-en-function-xpathresulttype-getqnametype"
language: "java"
lang: "en"
category: "function"
name: "XPathResultType.getQNameType"
signature: "static public QName getQNameType(Class<?> clsType)"
title: "XPathResultType.getQNameType"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathEvaluationResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathResultType.getQNameType

```java
static public QName getQNameType(Class<?> clsType)
```

Returns the QName type as specified in `XPathConstants` that
 corresponds to the specified class type.

**参数**

- **clsType** — a class type that the enum type supports

**返回**

- the QName type that matches with the specified class type, null if there is no match
