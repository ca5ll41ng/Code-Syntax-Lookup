---
id: "java-en-function-qname-getprefix"
language: "java"
lang: "en"
category: "function"
name: "QName.getPrefix"
signature: "public String getPrefix()"
title: "QName.getPrefix"
directive: "method"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/QName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QName.getPrefix

```java
public String getPrefix()
```

Get the prefix of this QName.

 

The prefix assigned to a QName might
 **NOT** be valid in a different
 context. For example, a QName may be assigned a
 prefix in the context of parsing a document but that prefix may
 be invalid in the context of a different document.

**返回**

- prefix of this QName
