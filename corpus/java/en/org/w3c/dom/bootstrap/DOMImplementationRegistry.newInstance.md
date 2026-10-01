---
id: "java-en-function-domimplementationregistry-newinstance"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementationRegistry.newInstance"
signature: "public static DOMImplementationRegistry newInstance() throws ClassNotFoundException, InstantiationException, IllegalAccessException, ClassCastException"
title: "DOMImplementationRegistry.newInstance"
directive: "method"
module: "java.xml/org.w3c.dom.bootstrap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/bootstrap/DOMImplementationRegistry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementationRegistry.newInstance

```java
public static DOMImplementationRegistry newInstance() throws ClassNotFoundException, InstantiationException, IllegalAccessException, ClassCastException
```

Obtain a new instance of a DOMImplementationRegistry.

 The DOMImplementationRegistry is initialized by the
 application or the implementation, depending on the context, by
 first checking the value of the Java system property
 org.w3c.dom.DOMImplementationSourceList and
 the service provider whose contents are at
 "META_INF/services/org.w3c.dom.DOMImplementationSourceList".
 The value of this property is a white-space separated list of
 names of availables classes implementing the
 DOMImplementationSource interface. Each class listed
 in the class name list is instantiated and any exceptions
 encountered are thrown to the application.

**返回**

- an initialized instance of DOMImplementationRegistry

**异常**

- **ClassNotFoundException** — If any specified class can not be found
- **InstantiationException** — If any specified class is an interface or abstract class
- **IllegalAccessException** — If the default constructor of a specified class is not accessible
- **ClassCastException** — If any specified class does not implement DOMImplementationSource
