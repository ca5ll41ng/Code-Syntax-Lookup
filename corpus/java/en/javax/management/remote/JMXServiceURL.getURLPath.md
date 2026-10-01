---
id: "java-en-function-jmxserviceurl-geturlpath"
language: "java"
lang: "en"
category: "function"
name: "JMXServiceURL.getURLPath"
signature: "public String getURLPath()"
title: "JMXServiceURL.getURLPath"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXServiceURL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXServiceURL.getURLPath

```java
public String getURLPath()
```

The URL Path part of the Service URL.  This is an empty
 string, or a string beginning with a slash (/), or
 a string beginning with a semicolon (;).

**返回**

- the URL Path part of the Service URL.  This is never null.
