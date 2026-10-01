---
id: "java-en-function-permissioncollection-elementsasstream"
language: "java"
lang: "en"
category: "function"
name: "PermissionCollection.elementsAsStream"
signature: "public Stream<Permission> elementsAsStream()"
title: "PermissionCollection.elementsAsStream"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PermissionCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PermissionCollection.elementsAsStream

```java
public Stream<Permission> elementsAsStream()
```

Returns a stream of all the Permission objects in the collection.

 

 The collection should not be modified (see `add`) during the
 execution of the terminal stream operation. Otherwise, the result of the
 terminal stream operation is undefined.

 The default implementation creates a stream whose source is derived from
 the enumeration returned from a call to `elements`.

**返回**

- a stream of all the Permissions.

> *Since 9*
