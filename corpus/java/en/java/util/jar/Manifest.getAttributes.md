---
id: "java-en-function-manifest-getattributes"
language: "java"
lang: "en"
category: "function"
name: "Manifest.getAttributes"
signature: "public Attributes getAttributes(String name)"
title: "Manifest.getAttributes"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Manifest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Manifest.getAttributes

```java
public Attributes getAttributes(String name)
```

Returns the Attributes for the specified entry name.
 This method is defined as:
 
```

      return (Attributes)getEntries().get(name)
 
```

 Though `null` is a valid `name`, when
 `getAttributes(null)` is invoked on a `Manifest`
 obtained from a jar file, `null` will be returned.  While jar
 files themselves do not allow `null`-named attributes, it is
 possible to invoke `getEntries` on a `Manifest`, and
 on that result, invoke `put` with a null key and an
 arbitrary value.  Subsequent invocations of
 `getAttributes(null)` will return the just-`put`
 value.
 

 Note that this method does not return the manifest's main attributes;
 see `getMainAttributes`.

**参数**

- **name** — entry name

**返回**

- the Attributes for the specified entry name
