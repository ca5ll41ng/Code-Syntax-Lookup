---
id: "java-en-function-mbeanserverconnection-isinstanceof"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.isInstanceOf"
signature: "public boolean isInstanceOf(ObjectName name, String className) throws InstanceNotFoundException, IOException"
title: "MBeanServerConnection.isInstanceOf"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.isInstanceOf

```java
public boolean isInstanceOf(ObjectName name, String className) throws InstanceNotFoundException, IOException
```

Returns true if the MBean specified is an instance of the
 specified class, false otherwise.

 

If name does not name an MBean, this method
 throws `InstanceNotFoundException`.

 

Otherwise, let

 X be the MBean named by name,

 L be the ClassLoader of X,

 N be the class name in X's `MBeanInfo`.

 

If N equals className, the result is true.

 

Otherwise, if L successfully loads className
 and X is an instance of this class, the result is true.

 

Otherwise, if L successfully loads both N and
 className, and the second class is assignable from
 the first, the result is true.

 

Otherwise, the result is false.

**参数**

- **name** — The ObjectName of the MBean.
- **className** — The name of the class.

**返回**

- true if the MBean specified is an instance of the specified class according to the rules above, false otherwise.

**异常**

- **InstanceNotFoundException** — The MBean specified is not registered in the MBean server.
- **IOException** — A communication problem occurred when talking to the MBean server.

**参见**

- Class#isInstance
