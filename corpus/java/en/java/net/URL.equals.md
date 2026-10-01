---
id: "java-en-function-url-equals"
language: "java"
lang: "en"
category: "function"
name: "URL.equals"
signature: "public boolean equals(Object obj)"
title: "URL.equals"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.equals

```java
public boolean equals(Object obj)
```

Compares this URL for equality with another object.

 If the given object is not a URL then this method immediately returns
 `false`.

 Two URL objects are equal if they have the same protocol, reference
 equivalent hosts, have the same port number on the host, and the same
 file and fragment of the file.

 Two hosts are considered equivalent if both host names can be resolved
 into the same IP addresses; else if either host name can't be
 resolved, the host names must be equal without regard to case; or both
 host names equal to null.

 Since hosts comparison requires name resolution, this operation is a
 blocking operation. 

 Note: The defined behavior for `equals` is known to
 be inconsistent with virtual hosting in HTTP.

**参数**

- **obj** — the URL to compare against.

**返回**

- `true` if the objects are the same; `false` otherwise.
