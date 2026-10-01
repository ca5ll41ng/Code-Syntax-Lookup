---
id: "java-en-function-descriptorsupport-tostring"
language: "java"
lang: "en"
category: "function"
name: "DescriptorSupport.toString"
signature: "public synchronized String toString()"
title: "DescriptorSupport.toString"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/DescriptorSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DescriptorSupport.toString

```java
public synchronized String toString()
```

Returns a human readable string representing the
 descriptor.  The string will be in the format of
 "fieldName=fieldValue,fieldName2=fieldValue2,..."

 If there are no fields in the descriptor, then an empty String
 is returned.

 If a fieldValue is an object then the toString() method is
 called on it and its returned value is used as the value for
 the field enclosed in parenthesis.

**异常**

- **RuntimeOperationsException** — for illegal value for field Names or field Values.  If the descriptor string fails for any reason, this exception will be thrown.
