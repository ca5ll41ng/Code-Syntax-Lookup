---
id: "java-en-function-runtimemxbean-getsystemproperties"
language: "java"
lang: "en"
category: "function"
name: "RuntimeMXBean.getSystemProperties"
signature: "public java.util.Map<String, String> getSystemProperties()"
title: "RuntimeMXBean.getSystemProperties"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/RuntimeMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeMXBean.getSystemProperties

```java
public java.util.Map<String, String> getSystemProperties()
```

Returns a map of names and values of all system properties.
 This method calls `getProperties` to get all
 system properties.  Properties whose name or value is not
 a `String` are omitted.

 

 **MBeanServer access**:

 The mapped type of `Map` is
 `javax.management.openmbean.TabularData TabularData`
 with two items in each row as follows:
 
 Name and Type for each item
 
 
   Item Name
   Item Type
   
 
 
 
   `key`
   `String`
   
 
   `value`
   `String`

**返回**

- a map of names and values of all system properties.
