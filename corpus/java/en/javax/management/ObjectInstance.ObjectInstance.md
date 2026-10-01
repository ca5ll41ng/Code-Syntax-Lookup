---
id: "java-en-function-objectinstance-objectinstance"
language: "java"
lang: "en"
category: "function"
name: "ObjectInstance.ObjectInstance"
signature: "public ObjectInstance(String objectName, String className) throws MalformedObjectNameException"
title: "ObjectInstance.ObjectInstance"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectInstance.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInstance.ObjectInstance

```java
public ObjectInstance(String objectName, String className) throws MalformedObjectNameException
```

Allows an object instance to be created given a string representation of
 an object name and the full class name, including the package name.

**参数**

- **objectName** — A string representation of the object name.
- **className** — The full class name, including the package name, of the object instance.  If the MBean is a Dynamic MBean the class name corresponds to its `getMBeanInfo() getMBeanInfo`.getClassName().

**异常**

- **MalformedObjectNameException** — The string passed as a parameter does not have the right format.
