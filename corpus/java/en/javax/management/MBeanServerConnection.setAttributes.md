---
id: "java-en-function-mbeanserverconnection-setattributes"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.setAttributes"
signature: "public AttributeList setAttributes(ObjectName name, AttributeList attributes) throws InstanceNotFoundException, ReflectionException, IOException"
title: "MBeanServerConnection.setAttributes"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.setAttributes

```java
public AttributeList setAttributes(ObjectName name, AttributeList attributes) throws InstanceNotFoundException, ReflectionException, IOException
```

Sets the values of several attributes of a named MBean. The MBean is
 identified by its object name.

 

If one or more attributes cannot be set for some reason, they will be
 omitted from the returned `AttributeList`.  The caller should check
 that the input `AttributeList` is the same size as the output one.
 To discover what problem prevented a given attribute from being retrieved,
 it will usually be possible to call `setAttribute setAttribute`
 for that attribute, although this is not guaranteed to work.  (For
 example, the values of two attributes may have been rejected because
 they were inconsistent with each other.  Setting one of them alone might
 be allowed.)

 

Here is an example of calling this method and checking that it
 succeeded in setting all the requested attributes:

 
```

 AttributeList inputAttrs = ...;
 AttributeList outputAttrs = mbeanServerConnection.setAttributes(<!--
 -->objectName, inputAttrs);
 if (inputAttrs.size() == outputAttrs.size())
     System.out.println("All attributes were set successfully");
 else {
     `List` missing = new `ArrayList`();
     for (Attribute a : inputAttrs.asList())
         missing.add(a.getName());
     for (Attribute a : outputAttrs.asList())
         missing.remove(a.getName());
     System.out.println("Did not set: " + missing);
 }
 
```

**参数**

- **name** — The object name of the MBean within which the attributes are to be set.
- **attributes** — A list of attributes: The identification of the attributes to be set and the values they are to be set to.

**返回**

- The list of attributes that were set, with their new values.

**异常**

- **InstanceNotFoundException** — The MBean specified is not registered in the MBean server.
- **ReflectionException** — An exception occurred when trying to invoke the getAttributes method of a Dynamic MBean.
- **RuntimeOperationsException** — Wraps a java.lang.IllegalArgumentException: The object name in parameter is null or attributes in parameter is null.
- **IOException** — A communication problem occurred when talking to the MBean server.

**参见**

- #getAttributes
