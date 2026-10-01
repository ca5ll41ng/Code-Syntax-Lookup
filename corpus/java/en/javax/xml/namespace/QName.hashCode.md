---
id: "java-en-function-qname-hashcode"
language: "java"
lang: "en"
category: "function"
name: "QName.hashCode"
signature: "public final int hashCode()"
title: "QName.hashCode"
directive: "method"
module: "java.xml/javax.xml.namespace"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/namespace/QName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QName.hashCode

```java
public final int hashCode()
```

Generate the hash code for this QName.

 

The hash code is calculated using both the Namespace URI and
 the local part of the QName.  The prefix is
 **NOT** used to calculate the hash
 code.

 

This method satisfies the general contract of `hashCode`.

**返回**

- hash code for this QName Object
