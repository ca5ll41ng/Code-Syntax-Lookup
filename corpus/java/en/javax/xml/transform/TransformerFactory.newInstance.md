---
id: "java-en-function-transformerfactory-newinstance"
language: "java"
lang: "en"
category: "function"
name: "TransformerFactory.newInstance"
signature: "public static TransformerFactory newInstance() throws TransformerFactoryConfigurationError"
title: "TransformerFactory.newInstance"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory.newInstance

```java
public static TransformerFactory newInstance() throws TransformerFactoryConfigurationError
```

Obtains a new instance of a `TransformerFactory`. This method uses the
 JAXP Lookup Mechanism
 to determine the `TransformerFactory` implementation class to load.
 

 Once an application has obtained a reference to a
 `TransformerFactory`, it can use the factory to configure
 and obtain transformer instances.

**返回**

- new TransformerFactory instance, never null.

**异常**

- **TransformerFactoryConfigurationError** — Thrown in case of `java.util.ServiceConfigurationError service configuration error` or if the implementation is not available or cannot be instantiated.
