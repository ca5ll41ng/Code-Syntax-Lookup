---
id: "java-en-function-inetaddress-getcanonicalhostname"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.getCanonicalHostName"
signature: "public String getCanonicalHostName()"
title: "InetAddress.getCanonicalHostName"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.getCanonicalHostName

```java
public String getCanonicalHostName()
```

Gets the fully qualified domain name for this
 `getAddress() IP address` using the system-wide
 `InetAddressResolver resolver`.

 

The system-wide resolver will be used to do a reverse name lookup of the IP address.
 The lookup can fail for many reasons that include the host not being registered with the name
 service. If the resolver is unable to determine the fully qualified
 domain name, this method returns the `getHostAddress() textual representation`
 of the IP address.

**返回**

- the fully qualified domain name for this IP address. If the system-wide resolver wasn't able to determine the fully qualified domain name for the IP address, the textual representation of the IP address is returned instead.

> *Since 1.4*
