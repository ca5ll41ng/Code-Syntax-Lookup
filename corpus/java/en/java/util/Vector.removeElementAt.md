---
id: "java-en-function-vector-removeelementat"
language: "java"
lang: "en"
category: "function"
name: "Vector.removeElementAt"
signature: "public synchronized void removeElementAt(int index)"
title: "Vector.removeElementAt"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.removeElementAt

```java
public synchronized void removeElementAt(int index)
```

Deletes the component at the specified index. Each component in
 this vector with an index greater or equal to the specified
 `index` is shifted downward to have an index one
 smaller than the value it had previously. The size of this vector
 is decreased by `1`.

 

The index must be a value greater than or equal to `0`
 and less than the current size of the vector.

 

This method is identical in functionality to the `remove`
 method (which is part of the `List` interface).  Note that the
 `remove` method returns the old value that was stored at the
 specified position.

**参数**

- **index** — the index of the object to remove

**异常**

- **ArrayIndexOutOfBoundsException** — if the index is out of range (`index < 0 || index >= size()`)
