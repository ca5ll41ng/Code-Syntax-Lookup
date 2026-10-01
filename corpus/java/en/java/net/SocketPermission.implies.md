---
id: "java-en-function-socketpermission-implies"
language: "java"
lang: "en"
category: "function"
name: "SocketPermission.implies"
signature: "public boolean implies(Permission p)"
title: "SocketPermission.implies"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketPermission.implies

```java
public boolean implies(Permission p)
```

Checks if this socket permission object "implies" the
 specified permission.
 

 More specifically, this method first ensures that all of the following
 are true (and returns false if any of them are not):
 
 
-  p is an instanceof SocketPermission,
 
-  p's actions are a proper subset of this
 object's actions, and
 
-  p's port range is included in this port range. Note:
 port range is ignored when p only contains the action, 'resolve'.
 

 Then `implies` checks each of the following, in order,
 and for each returns true if the stated condition is true:
 
 
-  If this object was initialized with a single IP address and one of p's
 IP addresses is equal to this object's IP address.
 
- If this object is a wildcard domain (such as *.example.com), and
 p's canonical name (the name without any preceding *)
 ends with this object's canonical host name. For example, *.example.com
 implies *.foo.example.com.
 
- If this object was not initialized with a single IP address, and one of this
 object's IP addresses equals one of p's IP addresses.
 
- If this canonical name equals p's canonical name.
 

 If none of the above are true, `implies` returns false.

**参数**

- **p** — the permission to check against.

**返回**

- true if the specified permission is implied by this object, false if not.
