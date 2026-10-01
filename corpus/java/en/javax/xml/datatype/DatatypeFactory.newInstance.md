---
id: "java-en-function-datatypefactory-newinstance"
language: "java"
lang: "en"
category: "function"
name: "DatatypeFactory.newInstance"
signature: "public static DatatypeFactory newInstance() throws DatatypeConfigurationException"
title: "DatatypeFactory.newInstance"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/DatatypeFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatatypeFactory.newInstance

```java
public static DatatypeFactory newInstance() throws DatatypeConfigurationException
```

Obtain a new instance of a `DatatypeFactory`.
 This method uses the
 JAXP Lookup Mechanism
 to determine the `DatatypeFactory` implementation class to load.

**返回**

- New instance of a `DatatypeFactory`

**异常**

- **DatatypeConfigurationException** — If the implementation is not available or cannot be instantiated.

**参见**

- #newInstance(String factoryClassName, ClassLoader classLoader)
