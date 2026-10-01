---
id: "java-en-function-java-lang-foreign-arena"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.Arena"
title: "Arena"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Arena.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arena

An arena controls the lifecycle of native memory segments, providing both flexible
 allocation and timely deallocation.
 

 An arena has a `MemorySegment.Scope scope` - the arena scope.
 All the segments allocated by the arena are associated with the arena scope. As such,
 the arena determines the temporal bounds of all the memory segments allocated by it.
 

 Moreover, an arena also determines whether access to memory segments allocated by it
 should be `isAccessibleBy(Thread) restricted` to specific
 threads. An arena is a `SegmentAllocator` and features several allocation
 methods that can be used by clients to obtain native segments.
 

 The simplest arena is the `global() global arena`. The global arena
 features an unbounded lifetime. The scope of the global arena is the global
 scope. As such, native segments allocated with the global arena are always accessible
 and their backing regions of memory are never deallocated. Moreover, memory segments
 allocated with the global arena can be `isAccessibleBy(Thread) accessed`
 from any thread.
 {@snippet lang = java:
 MemorySegment segment = Arena.global().allocate(100, 1); // @highlight regex='global()'
 ...
 // segment is never deallocated!
}
 

 Alternatively, clients can obtain an `ofAuto() automatic arena`, that
 is an arena which features a bounded lifetime that is managed, automatically,
 by the garbage collector. The scope of an automatic arena is an automatic scope. As
 such, the regions of memory backing memory segments allocated with the automatic arena
 are deallocated at some unspecified time after the automatic arena (and all
 the segments allocated by it) becomes `#reachability unreachable`,
 as shown below:
 {@snippet lang = java:
 MemorySegment segment = Arena.ofAuto().allocate(100, 1); // @highlight regex='ofAuto()'
 ...
 segment = null; // the segment region becomes available for deallocation after this point
}
 Memory segments allocated with an automatic arena can also be
 `isAccessibleBy(Thread) accessed` from any thread.
 

 Rather than leaving deallocation in the hands of the Java runtime, clients will often
 wish to exercise control over the timing of deallocation for regions of memory that
 back memory segments. Two kinds of arenas support this, namely `ofConfined() confined`
 and `ofShared() shared` arenas. They both feature bounded lifetimes that
 are managed manually. For instance, when a confined arena is `close() closed`
 successfully, its scope is `isAlive() invalidated`. As a result, all
 the memory segments allocated by the arena can no longer be accessed, and their
 regions of memory are deallocated:

 {@snippet lang = java:
 MemorySegment segment = null;
 try (Arena arena = Arena.ofConfined()) { // @highlight regex='ofConfined()'
     segment = arena.allocate(100);
     ...
 } // segment region deallocated here
 segment.get(ValueLayout.JAVA_BYTE, 0); // throws IllegalStateException
}

 Memory segments allocated with a `ofConfined() confined arena` can only be
 accessed (and closed) by the thread that created the arena. If access to a memory
 segment from multiple threads is required, clients can allocate segments in a
 `ofShared() shared arena` instead.
 

 The characteristics of the various arenas are summarized in the following table:

 
 Arenas characteristics
 
 
     Kind
     Bounded lifetime
     Explicitly closeable
     Accessible from multiple threads
 
 
 
 Global
     No
     No
     Yes
 Automatic
     Yes
     No
     Yes
 Confined
     Yes
     Yes
     No
 Shared
     Yes
     Yes
     Yes
 
 

 Safety and thread-confinement

 Arenas provide strong temporal safety guarantees: a memory segment allocated by an
 arena cannot be accessed after the arena has been closed. The cost of
 providing this guarantee varies based on the number of threads that have access to the
 memory segments allocated by the arena. For instance, if an arena is always created
 and closed by one thread, and the memory segments allocated by the arena are always
 accessed by that same thread, then ensuring correctness is trivial.
 

 Conversely, if an arena allocates segments that can be accessed by multiple threads,
 or if the arena can be closed by a thread other than the accessing thread, then
 ensuring correctness is much more complex. For example, a segment allocated with the
 arena might be accessed while another thread attempts, concurrently, to close
 the arena. To provide the strong temporal safety guarantee without forcing every
 client, even simple ones, to incur a performance impact, arenas are divided into
 thread-confined arenas, and shared arenas.
 

 Confined arenas, support strong thread-confinement guarantees. Upon creation, they are
 assigned an owner thread, typically the thread which initiated the creation
 operation. The segments created by a confined arena can only be
 `isAccessibleBy(Thread) accessed` by the owner thread.
 Moreover, any attempt to close the confined arena from a thread other than the owner
 thread will fail with a `WrongThreadException`.
 

 Shared arenas, on the other hand, have no owner thread. The segments created by a
 shared arena can be `isAccessibleBy(Thread) accessed` by
 any thread. This might be useful when multiple threads need to access the same memory
 segment concurrently (e.g. in the case of parallel processing). Moreover, a shared
 arena can be closed by any thread.

 Custom arenas

 Clients can define custom arenas to implement more efficient allocation strategies,
 or to have better control over when (and by whom) an arena can be closed. As an
 example, the following code defines a slicing arena that behaves like a
 confined arena (i.e., single-threaded access), but internally uses a
 `slicingAllocator(MemorySegment) slicing allocator` to
 respond to allocation requests.
 When the slicing arena is closed, the underlying confined arena is also closed; this
 will invalidate all segments allocated with the slicing arena (since the scope of the
 slicing arena is the same as that of the underlying confined arena):

 {@snippet lang = java:
 class SlicingArena implements Arena {
     final Arena arena = Arena.ofConfined();
     final SegmentAllocator slicingAllocator;

     SlicingArena(long size) {
         slicingAllocator = SegmentAllocator.slicingAllocator(arena.allocate(size));
     }

     public MemorySegment allocate(long byteSize, long byteAlignment) {
         return slicingAllocator.allocate(byteSize, byteAlignment);
     }

     public MemorySegment.Scope scope() {
         return arena.scope();
     }

     public void close() {
         arena.close();
     }

 }
 }

 In other words, a slicing arena provides a vastly more efficient and scalable
 allocation strategy, while still retaining the timely deallocation guarantee provided
 by the underlying confined arena:

 {@snippet lang = java:
 try (Arena slicingArena = new SlicingArena(1000)) {
     for (int i = 0; i < 10; i++) {
         MemorySegment s = slicingArena.allocateFrom(JAVA_INT, 1, 2, 3, 4, 5);
         ...
     }
 } // all memory allocated is released here
 }

 Implementations of this interface are thread-safe.

**参见**

- MemorySegment

> *Since 22*
