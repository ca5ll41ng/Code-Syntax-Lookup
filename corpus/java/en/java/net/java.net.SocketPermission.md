---
id: "java-en-function-java-net-socketpermission"
language: "java"
lang: "en"
category: "function"
name: "java.net.SocketPermission"
title: "SocketPermission"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketPermission

This class represents access to a network via sockets.
 A SocketPermission consists of a
 host specification and a set of "actions" specifying ways to
 connect to that host. The host is specified as
 
```

    host = (hostname | IPv4address | iPv6reference) [:portrange]
    portrange = portnumber | -portnumber | portnumber-[portnumber]
 
```

 The host is expressed as a DNS name, as a numerical IP address,
 or as "localhost" (for the local machine).
 The wildcard "*" may be included once in a DNS name host
 specification. If it is included, it must be in the leftmost
 position, as in "*.example.com".
 

 The format of the IPv6reference should follow that specified in RFC&nbsp;2732: Format
 for Literal IPv6 Addresses in URLs:
 
```

    ipv6reference = "[" IPv6address "]"

```

 For example, you can construct a SocketPermission instance
 as the following:
 
```

    String hostAddress = inetaddress.getHostAddress();
    if (inetaddress instanceof Inet6Address) {
        sp = new SocketPermission("[" + hostAddress + "]:" + port, action);
    } else {
        sp = new SocketPermission(hostAddress + ":" + port, action);
    }
 
```

 or
 
```

    String host = url.getHost();
    sp = new SocketPermission(host + ":" + port, action);
 
```

 

 The full uncompressed form of
 an IPv6 literal address is also valid.
 

 The port or portrange is optional. A port specification of the
 form "N-", where N is a port number, signifies all ports
 numbered N and above, while a specification of the
 form "-N" indicates all ports numbered N and below.
 The special port value `0` refers to the entire ephemeral
 port range. This is a fixed range of ports a system may use to
 allocate dynamic ports from. The actual range may be system dependent.
 

 The possible ways to connect to the host are
 
```

 accept
 connect
 listen
 resolve
 
```

 The "listen" action is only meaningful when used with "localhost" and
 means the ability to bind to a specified port.
 The "resolve" action is implied when any of the other actions are present.
 The action "resolve" refers to host/ip name service lookups.
 

 The actions string is converted to lowercase before processing.

      RFC 2732: Format for Literal IPv6 Addresses in URL's

**参见**

- java.security.Permissions

> *Since 1.2*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
