---
id: "java-en-function-mbeanserver-instantiate"
language: "java"
lang: "en"
category: "function"
name: "MBeanServer.instantiate"
signature: "public Object instantiate(String className) throws ReflectionException, MBeanException"
title: "MBeanServer.instantiate"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServer.instantiate

```java
public Object instantiate(String className) throws ReflectionException, MBeanException
```

Instantiates an object using the list of all class loaders
 registered in the MBean server's `javax.management.loading.ClassLoaderRepository Class Loader
 Repository`.  The object's class should have a public
 constructor.  This method returns a reference to the newly
 created object.  The newly created object is not registered in
 the MBean server.

 

This method is equivalent to `instantiate(String,Object[],String[])
 instantiate`.

**参数**

- **className** — The class name of the object to be instantiated.

**返回**

- The newly instantiated object.

**异常**

- **ReflectionException** — Wraps a java.lang.ClassNotFoundException or the java.lang.Exception that occurred when trying to invoke the object's constructor.
- **MBeanException** — The constructor of the object has thrown an exception
- **RuntimeOperationsException** — Wraps a java.lang.IllegalArgumentException: The className passed in parameter is null.
