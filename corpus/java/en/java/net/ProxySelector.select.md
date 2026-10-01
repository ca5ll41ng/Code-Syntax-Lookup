---
id: "java-en-function-proxyselector-select"
language: "java"
lang: "en"
category: "function"
name: "ProxySelector.select"
signature: "public abstract List<Proxy> select(URI uri)"
title: "ProxySelector.select"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ProxySelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProxySelector.select

```java
public abstract List<Proxy> select(URI uri)
```

Selects all the applicable proxies based on the protocol to
 access the resource with and a destination address to access
 the resource at.
 The format of the URI is defined as follows:
 
 
- http URI for http connections
 
- https URI for https connections
 
- `socket://host:port`

     for tcp client sockets connections

**参数**

- **uri** — The URI that a connection is required to

**返回**

- a List of Proxies. Each element in the List is of type `java.net.Proxy Proxy`; when no proxy is available, the list will contain one element of type `java.net.Proxy Proxy` that represents a direct connection.

**异常**

- **IllegalArgumentException** — if the argument is null or if the protocol or host cannot be determined from the provided `uri`
