---
id: "java-en-function-hostsfileresolver-lookupbyname"
language: "java"
lang: "en"
category: "function"
name: "HostsFileResolver.lookupByName"
signature: "public Stream<InetAddress> lookupByName(String host, LookupPolicy lookupPolicy) throws UnknownHostException"
title: "HostsFileResolver.lookupByName"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HostsFileResolver.lookupByName

```java
public Stream<InetAddress> lookupByName(String host, LookupPolicy lookupPolicy) throws UnknownHostException
```

Lookup a host mapping by name. Retrieve the IP addresses
 associated with a host.

 

Search the configured hosts file for the addresses associated
 with the specified host name.

**参数**

- **host** — the specified hostname
- **lookupPolicy** — IP addresses lookup policy which specifies addresses family and their order

**返回**

- stream of IP addresses for the requested host

**异常**

- **NullPointerException** — if either parameter is `null`
- **UnknownHostException** — if no IP address for the `host` could be found
