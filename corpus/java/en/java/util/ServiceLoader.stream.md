---
id: "java-en-function-serviceloader-stream"
language: "java"
lang: "en"
category: "function"
name: "ServiceLoader.stream"
signature: "public Stream<Provider<S>> stream()"
title: "ServiceLoader.stream"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ServiceLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServiceLoader.stream

```java
public Stream<Provider<S>> stream()
```

Returns a stream to lazily load available providers of this loader's
 service. The stream elements are of type `Provider Provider`, the
 `Provider`'s `get() get` method must be invoked to
 get or instantiate the provider.

 

 To achieve laziness the actual work of locating providers is done
 when processing the stream. If a service provider cannot be loaded for any
 of the reasons specified in the Errors section
 above then `ServiceConfigurationError` is thrown by whatever method
 caused the service provider to be loaded. 

 

 Caching: When processing the stream then providers that were previously
 loaded by stream operations are processed first, in load order. It then
 lazily loads any remaining service providers. If this loader's provider
 caches are cleared by invoking the `reload() reload` method then
 existing streams for this service loader should be discarded. The returned
 stream's source `Spliterator spliterator` is fail-fast and
 will throw `ConcurrentModificationException` if the provider cache
 has been cleared. 

 

 The following examples demonstrate usage. The first example creates
 a stream of `CodecFactory` objects, the second example is the same
 except that it sorts the providers by provider class name (and so locate
 all providers).
 
```
`Stream providers = ServiceLoader.load(CodecFactory.class)
            .stream()
            .map(Provider::get);

    Stream providers = ServiceLoader.load(CodecFactory.class)
            .stream()
            .sorted(Comparator.comparing(p -> p.type().getName()))
            .map(Provider::get);
 `
```

**返回**

- A stream that lazily loads providers for this loader's service

> *Since 9*
