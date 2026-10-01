---
id: "java-en-function-module-getpackages"
language: "java"
lang: "en"
category: "function"
name: "Module.getPackages"
signature: "public Set<String> getPackages()"
title: "Module.getPackages"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module.getPackages

```java
public Set<String> getPackages()
```

Returns the set of package names for the packages in this module.

 

 For named modules, the returned set contains an element for each
 package in the module. 

 

 For unnamed modules, the returned set contains an element for
 each package that `getDefinedPackages() has been defined`
 in the unnamed module.

**返回**

- the set of the package names of the packages in this module
