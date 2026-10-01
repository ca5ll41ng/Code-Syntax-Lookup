---
id: "java-en-function-javax-management-attributelist"
language: "java"
lang: "en"
category: "function"
name: "javax.management.AttributeList"
title: "AttributeList"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeList

Represents a list of values for attributes of an MBean.  See the
 `getAttributes getAttributes` and
 `setAttributes setAttributes` methods of
 `MBeanServer` and `MBeanServerConnection`.

 

It is not permitted to add objects to an `AttributeList` that are
 not instances of `Attribute`.  This will produce an `IllegalArgumentException`
 when calling methods in this class, or when using `listIterator` and `add` or `set`.

> *Since 1.5*
