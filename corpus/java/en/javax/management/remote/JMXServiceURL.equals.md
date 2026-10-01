---
id: "java-en-function-jmxserviceurl-equals"
language: "java"
lang: "en"
category: "function"
name: "JMXServiceURL.equals"
signature: "public boolean equals(Object obj)"
title: "JMXServiceURL.equals"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXServiceURL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXServiceURL.equals

```java
public boolean equals(Object obj)
```

Indicates whether some other object is equal to this one.
 This method returns true if and only if obj is an
 instance of JMXServiceURL whose `getProtocol`, `getHost`, `getPort`, and
 `getURLPath` methods return the same values as for
 this object.  The values for `getProtocol` and `getHost` can differ in case without affecting equality.

**参数**

- **obj** — the reference object with which to compare.

**返回**

- true if this object is the same as the obj argument; false otherwise.
