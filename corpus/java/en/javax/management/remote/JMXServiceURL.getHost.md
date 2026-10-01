---
id: "java-en-function-jmxserviceurl-gethost"
language: "java"
lang: "en"
category: "function"
name: "JMXServiceURL.getHost"
signature: "public String getHost()"
title: "JMXServiceURL.getHost"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXServiceURL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXServiceURL.getHost

```java
public String getHost()
```

The host part of the Service URL.  If the Service URL was
 constructed with the constructor that takes a URL string
 parameter, the result is the substring specifying the host in
 that URL.  If the Service URL was constructed with a
 constructor that takes a separate host parameter, the result is
 the string that was specified.  If that string was null, the
 result is
 InetAddress.getLocalHost().getHostName() if local host name
 can be resolved to an IP. Else numeric IP address of an active
 network interface will be used.

 

In either case, if the host was specified using the
 [...] syntax for numeric IPv6 addresses, the
 square brackets are not included in the return value here.

**返回**

- the host part of the Service URL.  This is never null.
