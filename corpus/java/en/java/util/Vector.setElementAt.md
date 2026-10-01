---
id: "java-en-function-vector-setelementat"
language: "java"
lang: "en"
category: "function"
name: "Vector.setElementAt"
signature: "public synchronized void setElementAt(E obj, int index)"
title: "Vector.setElementAt"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.setElementAt

```java
public synchronized void setElementAt(E obj, int index)
```

Sets the component at the specified `index` of this
 vector to be the specified object. The previous component at that
 position is discarded.

 

The index must be a value greater than or equal to `0`
 and less than the current size of the vector.

 

This method is identical in functionality to the
 `set`
 method (which is part of the `List` interface). Note that the
 `set` method reverses the order of the parameters, to more closely
 match array usage.  Note also that the `set` method returns the
 old value that was stored at the specified position.

**参数**

- **obj** — what the component is to be set to
- **index** — the specified index

**异常**

- **ArrayIndexOutOfBoundsException** — if the index is out of range (`index < 0 || index >= size()`)
