---
id: "java-en-function-urlpermission-urlpermission"
language: "java"
lang: "en"
category: "function"
name: "URLPermission.URLPermission"
signature: "public URLPermission(String url, String actions)"
title: "URLPermission.URLPermission"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLPermission.URLPermission

```java
public URLPermission(String url, String actions)
```

Creates a new URLPermission from a url string and which permits the given
 request methods and user-settable request headers.
 The name of the permission is the url string it was created with. Only the scheme,
 authority and path components of the url are used internally. Any fragment or query
 components are ignored. The permissions action string is as specified above.

**参数**

- **url** — the url string
- **actions** — the actions string

**异常**

- **IllegalArgumentException** — if url is invalid or if actions contains white-space.
