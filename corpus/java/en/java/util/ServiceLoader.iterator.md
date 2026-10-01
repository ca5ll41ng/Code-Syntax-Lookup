---
id: "java-en-function-serviceloader-iterator"
language: "java"
lang: "en"
category: "function"
name: "ServiceLoader.iterator"
signature: "public Iterator<S> iterator()"
title: "ServiceLoader.iterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ServiceLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServiceLoader.iterator

```java
public Iterator<S> iterator()
```

Returns an iterator to lazily load and instantiate the available
 providers of this loader's service.

 

 To achieve laziness the actual work of locating and instantiating
 providers is done by the iterator itself. Its `hasNext
 hasNext` and `next next` methods can therefore throw a
 `ServiceConfigurationError` for any of the reasons specified in
 the Errors section above. To write robust code it
 is only necessary to catch `ServiceConfigurationError` when using
 the iterator. If an error is thrown then subsequent invocations of the
 iterator will make a best effort to locate and instantiate the next
 available provider, but in general such recovery cannot be guaranteed.

 

 Caching: The iterator returned by this method first yields all of
 the elements of the provider cache, in the order that they were loaded.
 It then lazily loads and instantiates any remaining service providers,
 adding each one to the cache in turn. If this loader's provider caches are
 cleared by invoking the `reload() reload` method then existing
 iterators for this service loader should be discarded.
 The `hasNext` and `next` methods of the iterator throw `java.util.ConcurrentModificationException ConcurrentModificationException`
 if used after the provider cache has been cleared.

 

 The iterator returned by this method does not support removal.
 Invoking its `remove() remove` method will
 cause an `UnsupportedOperationException` to be thrown.

 for this behavior is that a malformed provider-configuration file, like a
 malformed class file, indicates a serious problem with the way the Java
 virtual machine is configured or is being used.  As such it is preferable
 to throw an error rather than try to recover or, even worse, fail silently.

**返回**

- An iterator that lazily loads providers for this loader's service
