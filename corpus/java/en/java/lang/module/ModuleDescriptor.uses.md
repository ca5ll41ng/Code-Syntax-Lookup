---
id: "java-en-function-moduledescriptor-uses"
language: "java"
lang: "en"
category: "function"
name: "ModuleDescriptor.uses"
signature: "public Set<String> uses()"
title: "ModuleDescriptor.uses"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor.uses

```java
public Set<String> uses()
```

Returns the set of service dependences. 

 

 If this module is an automatic module then the set of service
 dependences is empty.

**返回**

- A possibly-empty unmodifiable set of the `#binary-name binary names` of the service types used
