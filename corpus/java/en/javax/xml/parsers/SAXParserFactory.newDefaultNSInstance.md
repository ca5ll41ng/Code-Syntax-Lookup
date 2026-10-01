---
id: "java-en-function-saxparserfactory-newdefaultnsinstance"
language: "java"
lang: "en"
category: "function"
name: "SAXParserFactory.newDefaultNSInstance"
signature: "public static SAXParserFactory newDefaultNSInstance()"
title: "SAXParserFactory.newDefaultNSInstance"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParserFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParserFactory.newDefaultNSInstance

```java
public static SAXParserFactory newDefaultNSInstance()
```

Creates a new NamespaceAware instance of the `SAXParserFactory`
 builtin system-default implementation. Parsers produced by the factory
 instance provides support for XML namespaces by default.

 In addition to creating a factory instance using the same process as
 `newDefaultInstance`, this method must set NamespaceAware to true.

**返回**

- a new instance of the `SAXParserFactory` builtin system-default implementation.

> *Since 13*
