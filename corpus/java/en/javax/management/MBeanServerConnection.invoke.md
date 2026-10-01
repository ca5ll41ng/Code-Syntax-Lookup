---
id: "java-en-function-mbeanserverconnection-invoke"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.invoke"
signature: "public Object invoke(ObjectName name, String operationName, Object params[], String signature[]) throws InstanceNotFoundException, MBeanException, ReflectionException, IOException"
title: "MBeanServerConnection.invoke"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.invoke

```java
public Object invoke(ObjectName name, String operationName, Object params[], String signature[]) throws InstanceNotFoundException, MBeanException, ReflectionException, IOException
```

Invokes an operation on an MBean.

 

Because of the need for a `signature` to differentiate
 possibly-overloaded operations, it is much simpler to invoke operations
 through an `newMBeanProxy(MBeanServerConnection, ObjectName,
 Class) MBean proxy` where possible.  For example, suppose you have a
 Standard MBean interface like this:

 
```

 public interface FooMBean {
     public int countMatches(String[] patterns, boolean ignoreCase);
 }
 
```

 

The `countMatches` operation can be invoked as follows:

 
```

 String[] myPatterns = ...;
 int count = (Integer) mbeanServerConnection.invoke(
         objectName,
         "countMatches",
         new Object[] {myPatterns, true},
         new String[] {String[].class.getName(), boolean.class.getName()});
 
```

 

Alternatively, it can be invoked through a proxy as follows:

 
```

 String[] myPatterns = ...;
 FooMBean fooProxy = JMX.newMBeanProxy(
         mbeanServerConnection, objectName, FooMBean.class);
 int count = fooProxy.countMatches(myPatterns, true);
 
```

**参数**

- **name** — The object name of the MBean on which the method is to be invoked.
- **operationName** — The name of the operation to be invoked.
- **params** — An array containing the parameters to be set when the operation is invoked
- **signature** — An array containing the signature of the operation, an array of class names in the format returned by `getName`. The class objects will be loaded using the same class loader as the one used for loading the MBean on which the operation was invoked.

**返回**

- The object returned by the operation, which represents the result of invoking the operation on the MBean specified.

**异常**

- **InstanceNotFoundException** — The MBean specified is not registered in the MBean server.
- **MBeanException** — Wraps an exception thrown by the MBean's invoked method.
- **ReflectionException** — Wraps a java.lang.Exception thrown while trying to invoke the method.
- **IOException** — A communication problem occurred when talking to the MBean server.
