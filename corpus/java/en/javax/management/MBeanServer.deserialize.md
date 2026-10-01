---
id: "java-en-function-mbeanserver-deserialize"
language: "java"
lang: "en"
category: "function"
name: "MBeanServer.deserialize"
signature: "default public ObjectInputStream deserialize(ObjectName name, byte[] data) throws InstanceNotFoundException, OperationsException"
title: "MBeanServer.deserialize"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServer.deserialize

```java
default public ObjectInputStream deserialize(ObjectName name, byte[] data) throws InstanceNotFoundException, OperationsException
```

De-serializes a byte array in the context of the class loader
 of an MBean.

**参数**

- **name** — The name of the MBean whose class loader should be used for the de-serialization.
- **data** — The byte array to be de-sererialized.

**返回**

- The de-serialized object stream.

**异常**

- **InstanceNotFoundException** — The MBean specified is not found.
- **OperationsException** — Any of the usual Input/Output related exceptions.

> **⚠ Deprecated** — Use `getClassLoaderFor getClassLoaderFor` to obtain the appropriate class loader for deserialization.
