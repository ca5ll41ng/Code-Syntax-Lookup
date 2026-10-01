---
id: "java-en-function-provider-type"
language: "java"
lang: "en"
category: "function"
name: "Provider.type"
signature: "Class<? extends S> type()"
title: "Provider.type"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ServiceLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.type

```java
Class<? extends S> type()
```

Returns the provider type. There is no guarantee that this type is
 accessible or that it has a public no-args constructor. The `get` method should be used to obtain the provider instance.

 

 When a module declares that the provider class is created by a
 provider factory then this method returns the return type of its
 public static "`provider()`" method.

**返回**

- The provider type
