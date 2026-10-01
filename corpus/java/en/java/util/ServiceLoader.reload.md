---
id: "java-en-function-serviceloader-reload"
language: "java"
lang: "en"
category: "function"
name: "ServiceLoader.reload"
signature: "public void reload()"
title: "ServiceLoader.reload"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ServiceLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServiceLoader.reload

```java
public void reload()
```

Clear this loader's provider cache so that all providers will be
 reloaded.

 

 After invoking this method, subsequent invocations of the `iterator() iterator` or `stream() stream` methods will lazily
 locate providers (and instantiate in the case of `iterator`)
 from scratch, just as is done by a newly-created service loader.

 

 This method is intended for use in situations in which new service
 providers can be installed into a running Java virtual machine.
