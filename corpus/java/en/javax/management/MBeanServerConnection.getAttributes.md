---
id: "java-en-function-mbeanserverconnection-getattributes"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.getAttributes"
signature: "public AttributeList getAttributes(ObjectName name, String[] attributes) throws InstanceNotFoundException, ReflectionException, IOException"
title: "MBeanServerConnection.getAttributes"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.getAttributes

```java
public AttributeList getAttributes(ObjectName name, String[] attributes) throws InstanceNotFoundException, ReflectionException, IOException
```

Retrieves the values of several attributes of a named MBean. The MBean
 is identified by its object name.

 

If one or more attributes cannot be retrieved for some reason, they
 will be omitted from the returned `AttributeList`.  The caller
 should check that the list is the same size as the `attributes`
 array.  To discover what problem prevented a given attribute from being
 retrieved, call `getAttribute getAttribute` for that attribute.

 

Here is an example of calling this method and checking that it
 succeeded in retrieving all the requested attributes:

 
```

 String[] attrNames = ...;
 AttributeList list = mbeanServerConnection.getAttributes(objectName, attrNames);
 if (list.size() == attrNames.length)
     System.out.println("All attributes were retrieved successfully");
 else {
     `List` missing = new `ArrayList`(<!--
 -->`asList Arrays.asList`(attrNames));
     for (Attribute a : list.asList())
         missing.remove(a.getName());
     System.out.println("Did not retrieve: " + missing);
 }
 
```

**参数**

- **name** — The object name of the MBean from which the attributes are retrieved.
- **attributes** — A list of the attributes to be retrieved.

**返回**

- The list of the retrieved attributes.

**异常**

- **InstanceNotFoundException** — The MBean specified is not registered in the MBean server.
- **ReflectionException** — An exception occurred when trying to invoke the getAttributes method of a Dynamic MBean.
- **RuntimeOperationsException** — Wrap a java.lang.IllegalArgumentException: The object name in parameter is null or attributes in parameter is null.
- **IOException** — A communication problem occurred when talking to the MBean server.

**参见**

- #setAttributes
