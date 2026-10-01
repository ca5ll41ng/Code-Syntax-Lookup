---
id: "java-en-function-socketpermission-socketpermission"
language: "java"
lang: "en"
category: "function"
name: "SocketPermission.SocketPermission"
signature: "public SocketPermission(String host, String action)"
title: "SocketPermission.SocketPermission"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketPermission.SocketPermission

```java
public SocketPermission(String host, String action)
```

Creates a new SocketPermission object with the specified actions.
 The host is expressed as a DNS name, or as a numerical IP address.
 Optionally, a port or a portrange may be supplied (separated
 from the DNS name or IP address by a colon).
 

 To specify the local machine, use "localhost" as the host.
 Also note: An empty host String ("") is equivalent to "localhost".
 

 The actions parameter contains a comma-separated list of the
 actions granted for the specified host (and port(s)). Possible actions are
 "connect", "listen", "accept", "resolve", or
 any combination of those. "resolve" is automatically added
 when any of the other three are specified.
 

 Examples of SocketPermission instantiation are the following:
 
```

    nr = new SocketPermission("www.example.com", "connect");
    nr = new SocketPermission("www.example.com:80", "connect");
    nr = new SocketPermission("*.example.com", "connect");
    nr = new SocketPermission("*.edu", "resolve");
    nr = new SocketPermission("204.160.241.0", "connect");
    nr = new SocketPermission("localhost:1024-65535", "listen");
    nr = new SocketPermission("204.160.241.0:1024-65535", "connect");
 
```

**参数**

- **host** — the hostname or IP address of the computer, optionally including a colon followed by a port or port range.
- **action** — the action string.

**异常**

- **NullPointerException** — if any parameters are null
- **IllegalArgumentException** — if the format of `host` is invalid, or if the `action` string is empty, malformed, or contains an action other than the specified possible actions
