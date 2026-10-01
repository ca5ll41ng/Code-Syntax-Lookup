---
id: "java-en-function-urlpermission-implies"
language: "java"
lang: "en"
category: "function"
name: "URLPermission.implies"
signature: "public boolean implies(Permission p)"
title: "URLPermission.implies"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLPermission.implies

```java
public boolean implies(Permission p)
```

Checks if this URLPermission implies the given permission.
 Specifically, the following checks are done as if in the
 following sequence:
 
 
- if 'p' is not an instance of URLPermission return false
 
- if any of p's methods are not in this's method list, and if
     this's method list is not equal to "*", then return false.
 
- if any of p's headers are not in this's request header list, and if
     this's request header list is not equal to "*", then return false.
 
- if this's url scheme is not equal to p's url scheme return false
 
- if the scheme specific part of this's url is '*' return true
 
- if the set of hosts defined by p's url hostrange is not a subset of
     this's url hostrange then return false. For example, "*.foo.example.com"
     is a subset of "*.example.com". "foo.bar.example.com" is not
     a subset of "*.foo.example.com"
 
- if the portrange defined by p's url is not a subset of the
     portrange defined by this's url then return false.
 
- if the path or paths specified by p's url are contained in the
     set of paths specified by this's url, then return true
 
- otherwise, return false
 

 

Some examples of how paths are matched are shown below:
 
 Examples of Path Matching
 
 this's pathp's pathmatch
 
 
 /a/b/a/byes
 /a/b/*/a/b/cyes
   /a/b/c/dno
   /a/b/c/-no
 /a/b/-/a/b/c/dyes
   /a/b/c/d/eyes
   /a/b/c/*yes
