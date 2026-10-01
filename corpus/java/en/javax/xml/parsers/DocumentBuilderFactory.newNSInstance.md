---
id: "java-en-function-documentbuilderfactory-newnsinstance"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.newNSInstance"
signature: "public static DocumentBuilderFactory newNSInstance()"
title: "DocumentBuilderFactory.newNSInstance"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.newNSInstance

```java
public static DocumentBuilderFactory newNSInstance()
```

Creates a new NamespaceAware instance of a `DocumentBuilderFactory`.
 Parsers produced by the factory instance provides support for XML namespaces
 by default.

 In addition to creating a factory instance using the same process as
 `newInstance`, this method must set NamespaceAware to true.

**返回**

- a new instance of a `DocumentBuilderFactory`

**异常**

- **FactoryConfigurationError** — in case of `java.util.ServiceConfigurationError service configuration error` or if the implementation is not available or cannot be instantiated.

> *Since 13*
