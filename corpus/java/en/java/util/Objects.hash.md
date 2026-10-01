---
id: "java-en-function-objects-hash"
language: "java"
lang: "en"
category: "function"
name: "Objects.hash"
signature: "public static int hash(Object... values)"
title: "Objects.hash"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.hash

```java
public static int hash(Object... values)
```

{@return a hash code for a sequence of input values} The hash
 code is generated as if all the input values were placed into an
 array, and that array were hashed by calling `hashCode`.

 

This method is useful for implementing `hashCode` on objects containing multiple fields. For
 example, if an object that has three fields, `x`, `y`, and `z`, one could write:

 
```

 &#064;Override public int hashCode() {
     return Objects.hash(x, y, z);
 }
 
```

 **Warning: When a single object reference is supplied, the returned
 value does not equal the hash code of that object reference.** This
 value can be computed by calling `hashCode`.

**参数**

- **values** — the values to be hashed

**参见**

- Arrays#hashCode(Object[])
- List#hashCode
