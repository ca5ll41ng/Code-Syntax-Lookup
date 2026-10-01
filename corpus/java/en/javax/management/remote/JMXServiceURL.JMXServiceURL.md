---
id: "java-en-function-jmxserviceurl-jmxserviceurl"
language: "java"
lang: "en"
category: "function"
name: "JMXServiceURL.JMXServiceURL"
signature: "public JMXServiceURL(String serviceURL) throws MalformedURLException"
title: "JMXServiceURL.JMXServiceURL"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXServiceURL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXServiceURL.JMXServiceURL

```java
public JMXServiceURL(String serviceURL) throws MalformedURLException
```

Constructs a JMXServiceURL by parsing a Service URL
 string.

**参数**

- **serviceURL** — the URL string to be parsed.

**异常**

- **NullPointerException** — if serviceURL is null.
- **MalformedURLException** — if serviceURL does not conform to the syntax for an Abstract Service URL or if it is not a valid name for a JMX Remote API service.  A JMXServiceURL must begin with the string "service:jmx:" (case-insensitive).  It must not contain any characters that are not printable ASCII characters.
