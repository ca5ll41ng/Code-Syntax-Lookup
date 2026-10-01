---
id: "java-en-function-permission-getactions"
language: "java"
lang: "en"
category: "function"
name: "Permission.getActions"
signature: "public abstract String getActions()"
title: "Permission.getActions"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permission.getActions

```java
public abstract String getActions()
```

Returns the actions as a `String`. This is abstract
 so subclasses can defer creating a `String` representation until
 one is needed. Subclasses should always return actions in what they
 consider to be their
 canonical form. For example, two FilePermission objects created via
 the following:

 
```

   perm1 = new FilePermission(p1,"read,write");
   perm2 = new FilePermission(p2,"write,read");
 
```

 both return
 "read,write" when the `getActions` method is invoked.

**返回**

- the actions of this `Permission`.
