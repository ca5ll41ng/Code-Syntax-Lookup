---
id: "java-en-function-jmxserviceurl-tostring"
language: "java"
lang: "en"
category: "function"
name: "JMXServiceURL.toString"
signature: "public String toString()"
title: "JMXServiceURL.toString"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXServiceURL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXServiceURL.toString

```java
public String toString()
```

The string representation of this Service URL.  If the value
 returned by this method is supplied to the
 JMXServiceURL constructor, the resultant object is
 equal to this one.

 

The host part of the returned string
 is the value returned by `getHost`.  If that value
 specifies a numeric IPv6 address, it is surrounded by square
 brackets [].

 

The port part of the returned string
 is the value returned by `getPort` in its shortest
 decimal form.  If the value is zero, it is omitted.

**返回**

- the string representation of this Service URL.
