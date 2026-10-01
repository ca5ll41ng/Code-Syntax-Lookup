---
id: "java-en-function-java-io-objectinputfilter"
language: "java"
lang: "en"
category: "function"
name: "java.io.ObjectInputFilter"
title: "ObjectInputFilter"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputFilter

Filter classes, array lengths, and graph metrics during deserialization.

 

**Warning: Deserialization of untrusted data is inherently dangerous
 and should be avoided. Untrusted data should be carefully validated according to the
 "Serialization and Deserialization" section of the
 `secure_coding_guidelines_javase Secure Coding Guidelines for Java SE`.
 `serialization_filter_guide Serialization Filtering` describes best
 practices for defensive use of serial filters.
 **

 

To protect against deserialization vulnerabilities, application developers
 need a clear description of the objects that can be deserialized
 by each component or library. For each context and use case, developers should
 construct and apply an appropriate filter.

 Deserialization Filtering Factory and Filters
 The parts of deserialization filtering are the filters, composite filters, and filter factory.
 Each filter performs checks on classes and resource limits to determine the status as
 rejected, allowed, or undecided.
 Filters can be composed of other filters and merge or combine their results.
 The filter factory is responsible for establishing and updating the filter
 for each `ObjectInputStream`.

 

For simple cases, a static JVM-wide filter can be set for the entire application,
 without setting a filter factory.
 The JVM-wide filter can be set either with a system property on the command line or by
 calling `setSerialFilter(ObjectInputFilter) Config.setSerialFilter`.
 No custom filter factory needs to be specified, defaulting to the builtin filter factory.
 The builtin filter factory provides the `getSerialFilter static JVM-wide filter`
 for each `ObjectInputStream ObjectInputStream`.

 

For example, a filter that allows example classes, allows classes in the
 `java.base` module, and rejects all other classes can be set:
 As a command line property:
 {@snippet :
     % java -Djdk.serialFilter="example.*;java.base/*;!*" ...
 }
 Or programmatically:
 {@snippet lang="java":
     var filter = ObjectInputFilter.Config.createFilter("example.*;java.base/*;!*")
     ObjectInputFilter.Config.setSerialFilter(filter);
 }
 

In an application with multiple execution contexts, the application can provide a
 `setSerialFilterFactory(BinaryOperator) filter factory` to
 protect individual contexts by providing a custom filter for each. When the stream
 is constructed, the filter factory is called to identify the execution context from the available
 information, including the current thread-local state, hierarchy of callers, library, module,
 and class loader. At that point, the filter factory policy for creating or selecting filters
 can choose a specific filter or composition of filters based on the context.
 The JVM-wide deserialization filter factory ensures that a context-specific deserialization
 filter can be set on every `ObjectInputStream` and every object read from the
 stream can be checked.

 Invoking the Filter Factory
 

The JVM-wide filter factory is a function invoked when each `ObjectInputStream` is
 `ObjectInputStream() constructed` and when the
 `setObjectInputFilter(ObjectInputFilter) stream-specific filter is set`.
 The parameters are the current filter and a requested filter and it
 returns the filter to be used for the stream. When invoked from the
 `ObjectInputStream(InputStream) ObjectInputStream constructors`,
 the first parameter is `null` and the second parameter is the
 `getSerialFilter() static JVM-wide filter`.
 When invoked from `setObjectInputFilter ObjectInputStream.setObjectInputFilter`,
 the first parameter is the filter currently set on the stream (which was set in the constructor),
 and the second parameter is the filter given to `ObjectInputStream.setObjectInputFilter`.
 The current and new filter may each be `null` and the factory may return `null`.
 Note that the filter factory implementation can also use any contextual information
 at its disposal, for example, extracted from the application thread context, or its call stack,
 to compose and combine a new filter. It is not restricted to only use its two parameters.

 

The active deserialization filter factory is either:
 
 
- The application specific filter factory set via `setSerialFilterFactory`
     or the system property `jdk.serialFilterFactory` or
     the security property `jdk.serialFilterFactory`.
 
- Otherwise, a builtin deserialization filter factory
     provides the `getSerialFilter static JVM-wide filter` when invoked from the
     `ObjectInputStream(InputStream) ObjectInputStream constructors`
     and replaces the static filter when invoked from
     `setObjectInputFilter`.
     See `getSerialFilterFactory() getSerialFilterFactory`.
 

 Filters
 Filters can be created from a `createFilter(String) pattern string`,
 or based on a `Predicate predicate of a class` to
 `allowFilter(Predicate, Status) allow` or
 `rejectFilter(Predicate, Status) reject` classes.

 

The filter's `checkInput checkInput` method is invoked
 zero or more times while `readObject() reading objects`.
 The method is called to validate classes, the length of each array,
 the number of objects being read from the stream, the depth of the graph,
 and the total number of bytes read from the stream.

 

Composite filters combine or check the results of other filters.
 The `merge`
 filter combines the status value of two filters.
 The `rejectUndecidedClass`
 checks the result of a filter for classes when the status is `UNDECIDED`.
 In many cases any class not `ALLOWED` by the filter should be `REJECTED`.
 

 A deserialization filter determines whether the arguments are allowed or rejected and
 should return the appropriate status: `ALLOWED ALLOWED` or `REJECTED REJECTED`.
 If the filter cannot determine the status it should return `UNDECIDED UNDECIDED`.
 Filters should be designed for the specific use case and expected types.
 A filter designed for a particular use may be passed a class outside
 of the scope of the filter. If the purpose of the filter is to reject classes
 then it can reject a candidate class that matches and report `UNDECIDED` for others.
 A filter may be called with class equals `null`, `arrayLength` equal -1,
 the depth, number of references, and stream size and return a status
 that reflects only one or only some of the values.
 This allows a filter to be specific about the choice it is reporting and
 to use other filters without forcing either allowed or rejected status.

 Filter Model Examples
 For simple applications, a single predefined filter listing allowed or rejected
 classes may be sufficient to manage the risk of deserializing unexpected classes.
 

For an application composed from multiple modules or libraries, the structure
 of the application can be used to identify the classes to be allowed or rejected
 by each `ObjectInputStream` in each context of the application.
 The deserialization filter factory is invoked when each stream is constructed and
 can examine the thread or program to determine a context-specific filter to be applied.
 Some possible examples:
 
     
- Thread-local state can hold the filter to be applied or composed
         with a stream-specific filter.
         Filters could be pushed and popped from a virtual stack of filters
         maintained by the application or libraries.
     
- The filter factory can identify the caller of the deserialization method
         and use module or library context to select a filter or compose an appropriate
         context-specific filter.
         A mechanism could identify a callee with restricted or unrestricted
         access to serialized classes and choose a filter accordingly.
 

 Example to filter every deserialization in a thread

 This class shows how an application provided filter factory can combine filters
 to check every deserialization operation that takes place in a thread.
 It defines a thread-local variable to hold the thread-specific filter, and construct a filter factory
 that composes that filter with the static JVM-wide filter and the stream-specific filter,
 rejecting any classes not handled by those two filters.
 If a stream specific filter is set and does not accept or reject a class,
 the combined JVM-wide filter and thread filter is applied.
 The `doWithSerialFilter` method does the setup of the thread-specific filter
 and invokes the application provided `Runnable Runnable`.

 {@snippet lang="java":
 public static final class FilterInThread implements BinaryOperator {

     private final ThreadLocal filterThreadLocal = new ThreadLocal<>();

     // Construct a FilterInThread deserialization filter factory.
     public FilterInThread() {}

     // Returns a composite filter of the static JVM-wide filter, a thread-specific filter,
     // and the stream-specific filter.
     public ObjectInputFilter apply(ObjectInputFilter curr, ObjectInputFilter next) {
         if (curr == null) {
             // Called from the OIS constructor or perhaps OIS.setObjectInputFilter with no current filter
             var filter = filterThreadLocal.get();
             if (filter != null) {
                 // Merge to invoke the thread local filter and then the JVM-wide filter (if any)
                 filter = ObjectInputFilter.merge(filter, next);
                 return ObjectInputFilter.rejectUndecidedClass(filter);
             }
             return (next == null) ? null : ObjectInputFilter.rejectUndecidedClass(next);
         } else {
             // Called from OIS.setObjectInputFilter with a current filter and a stream-specific filter.
             // The curr filter already incorporates the thread filter and static JVM-wide filter
             // and rejection of undecided classes
             // If there is a stream-specific filter merge to invoke it and then the current filter.
             if (next != null) {
                 return ObjectInputFilter.merge(next, curr);
             }
             return curr;
         }
     }

     // Applies the filter to the thread and invokes the runnable.
     public void doWithSerialFilter(ObjectInputFilter filter, Runnable runnable) {
         var prevFilter = filterThreadLocal.get();
         try {
             filterThreadLocal.set(filter);
             runnable.run();
         } finally {
             filterThreadLocal.set(prevFilter);
         }
     }
 }
 }
 Using the Filter Factory
 To use `FilterInThread` utility create an instance and configure it as the
 JVM-wide filter factory.  The `doWithSerialFilter` method is invoked with a
 filter allowing the example application and core classes:
 {@snippet lang="java":
        // Create a FilterInThread filter factory and set
        var filterInThread = new FilterInThread();
        ObjectInputFilter.Config.setSerialFilterFactory(filterInThread);

        // Create a filter to allow example.* classes and reject all others
        var filter = ObjectInputFilter.Config.createFilter("example.*;java.base/*;!*");
        filterInThread.doWithSerialFilter(filter, () -> {
              byte[] bytes = ...;
              var o = deserializeObject(bytes);
        });
 }
 

 Unless otherwise noted, passing a `null` argument to a
 method in this interface and its nested classes will cause a
 `NullPointerException` to be thrown.

**参见**

- ObjectInputStream#setObjectInputFilter(ObjectInputFilter)

> *Since 9*
