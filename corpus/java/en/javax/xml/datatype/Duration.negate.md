---
id: "java-en-function-duration-negate"
language: "java"
lang: "en"
category: "function"
name: "Duration.negate"
signature: "public abstract Duration negate()"
title: "Duration.negate"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.negate

```java
public abstract Duration negate()
```

Returns a new `Duration` object whose
 value is `-this`.

 

 Since the `Duration` class is immutable, this method
 doesn't change the value of this object. It simply computes
 a new Duration object and returns it.

**返回**

- always return a non-null valid `Duration` object.
