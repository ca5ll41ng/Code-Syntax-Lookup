---
id: "java-en-function-tabulardatasupport-tostring"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.toString"
signature: "public String toString()"
title: "TabularDataSupport.toString"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.toString

```java
public String toString()
```

Returns a string representation of this `TabularDataSupport` instance.
 

 The string representation consists of the name of this class
 (ie `javax.management.openmbean.TabularDataSupport`),
 the string representation of the tabular type of this instance, and the string representation of the contents
 (ie list the key=value mappings as returned by a call to
 `dataMap.``toString`).

**返回**

- a string representation of this `TabularDataSupport` instance
