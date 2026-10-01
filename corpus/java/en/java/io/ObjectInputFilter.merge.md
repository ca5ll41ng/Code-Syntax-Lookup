---
id: "java-en-function-objectinputfilter-merge"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputFilter.merge"
signature: "static ObjectInputFilter merge(ObjectInputFilter filter, ObjectInputFilter anotherFilter)"
title: "ObjectInputFilter.merge"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputFilter.merge

```java
static ObjectInputFilter merge(ObjectInputFilter filter, ObjectInputFilter anotherFilter)
```

Returns a filter that merges the status of a filter and another filter.
 If `another` filter is `null`, the `filter` is returned.
 Otherwise, a `filter` is returned to merge the pair of `non-null` filters.

 The filter returned implements the `checkInput` method
 as follows:
 
     
- Invoke `filter` on the `FilterInfo` to get its `status`;
     
- Return `REJECTED` if the `status` is `REJECTED`;
     
- Invoke `anotherFilter` to get the `otherStatus`;
     
- Return `REJECTED` if the `otherStatus` is `REJECTED`;
     
- Return `ALLOWED`, if either `status` or `otherStatus`
          is `ALLOWED`, 
     
- Otherwise, return `UNDECIDED`

**参数**

- **filter** — a filter
- **anotherFilter** — a filter to be merged with the filter, may be `null`

**返回**

- an `ObjectInputFilter` that merges the status of the filter and another filter

> *Since 17*
