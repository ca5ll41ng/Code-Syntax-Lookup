---
id: "java-en-function-objectname-compareto"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.compareTo"
signature: "public int compareTo(ObjectName name)"
title: "ObjectName.compareTo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.compareTo

```java
public int compareTo(ObjectName name)
```

Compares two ObjectName instances. The ordering relation between
 ObjectNames is not completely specified but is intended to be such
 that a sorted list of ObjectNames will appear in an order that is
 convenient for a person to read.

 

In particular, if the two ObjectName instances have different
 domains then their order is the lexicographical order of the domains.
 The ordering of the key property list remains unspecified.

 

For example, the ObjectName instances below:
 
 
- Shapes:type=Square,name=3
 
- Colors:type=Red,name=2
 
- Shapes:type=Triangle,side=isosceles,name=2
 
- Colors:type=Red,name=1
 
- Shapes:type=Square,name=1
 
- Colors:type=Blue,name=1
 
- Shapes:type=Square,name=2
 
- JMImplementation:type=MBeanServerDelegate
 
- Shapes:type=Triangle,side=scalene,name=1
 

 

could be ordered as follows:
 
 
- Colors:type=Blue,name=1
 
- Colors:type=Red,name=1
 
- Colors:type=Red,name=2
 
- JMImplementation:type=MBeanServerDelegate
 
- Shapes:type=Square,name=1
 
- Shapes:type=Square,name=2
 
- Shapes:type=Square,name=3
 
- Shapes:type=Triangle,side=scalene,name=1
 
- Shapes:type=Triangle,side=isosceles,name=2

**参数**

- **name** — the ObjectName to be compared.

**返回**

- a negative integer, zero, or a positive integer as this ObjectName is less than, equal to, or greater than the specified ObjectName.

> *Since 1.6*
