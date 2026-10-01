---
id: "python-zh-guide-free-threading-extensions-free-threading-extensions"
language: "python"
lang: "zh"
category: "guide"
name: "free-threading-extensions"
title: "******************************************"
module: "free-threading-extensions"
source_url: "https://docs.python.org/zh-cn/3/howto/free-threading-extensions.html"
license: "PSF"
updated: "2026-10-01"
---

# ******************************************

.. _freethreading-extensions-howto:

******************************************
C API Extension Support for Free Threading
******************************************

Starting with the 3.13 release, CPython has support for running with
the `global interpreter lock` (GIL) disabled in a configuration
called `free threading`.  This document describes how to adapt C API
extensions to support free threading.

**Identifying the Free-Threaded Build in C**

The CPython C API exposes the `Py_GIL_DISABLED` macro: in the free-threaded
build it's defined to `1`, and in the regular build it's not defined.
You can use it to enable code that only runs under the free-threaded build::

    #ifdef Py_GIL_DISABLED
    /* code that only runs in the free-threaded build */
    #endif

> **Note**
>
> On Windows, this macro is not defined automatically, but must be specified
> to the compiler when building. The `sysconfig.get_config_var` function
> can be used to determine whether the current running interpreter had the
> macro defined.
>

**Module Initialization**

Extension modules need to explicitly indicate that they support running with
the GIL disabled; otherwise importing the extension will raise a warning and
enable the GIL at runtime.

There are two ways to indicate that an extension module supports running with
the GIL disabled depending on whether the extension uses multi-phase or
single-phase initialization.

Multi-Phase Initialization
..........................

Extensions that use `multi-phase initialization`
(functions like :c`PyModuleDef_Init`,
:c`PyModExport_*` export hook,
:c`PyModule_FromSlotsAndSpec`) should add a
:c`Py_mod_gil` slot in the module definition.
If your extension supports older versions of CPython,
you should guard the slot with a :c`PY_VERSION_HEX` check.

::

    static struct PyModuleDef_Slot module_slots[] = {
        ...
    #if PY_VERSION_HEX >= 0x030D0000
        {Py_mod_gil, Py_MOD_GIL_NOT_USED},
    #endif
        {0, NULL}
    };

Single-Phase Initialization
...........................

Extensions that use legacy `single-phase initialization`
(that is, :c`PyModule_Create`) should call :c`PyUnstable_Module_SetGIL` to
indicate that they support running with the GIL disabled.  The function is
only defined in the free-threaded build, so you should guard the call with
`#ifdef Py_GIL_DISABLED` to avoid compilation errors in the regular build.

::

    static struct PyModuleDef moduledef = {
        PyModuleDef_HEAD_INIT,
        ...
    };

    PyMODINIT_FUNC
    PyInit_mymodule(void)
    {
        PyObject *m = PyModule_Create(&moduledef);
        if (m == NULL) {
            return NULL;
        }
    #ifdef Py_GIL_DISABLED
        PyUnstable_Module_SetGIL(m, Py_MOD_GIL_NOT_USED);
    #endif
        return m;
    }

**General API Guidelines**

大多数 C API 是线程安全的，但是也存在例外。

* **Struct Fields**: Accessing fields in Python C API objects or structs
  directly is not thread-safe if the field may be concurrently modified.
* **Macros**: Accessor macros like :c`PyList_GET_ITEM`,
  :c`PyList_SET_ITEM`, and macros like
  :c`PySequence_Fast_GET_SIZE` that use the object returned by
  :c`PySequence_Fast` do not perform any error checking or locking.
  These macros are not thread-safe if the container object may be modified
  concurrently.
* **Borrowed References**: C API functions that return
  `borrowed references` may not be thread-safe if
  the containing object is modified concurrently.  See the section on
  `borrowed references` for more information.

Container Thread Safety
.......................

Containers like :c`PyListObject`,
:c`PyDictObject`, and :c`PySetObject` perform internal locking
in the free-threaded build.  For example, the :c`PyList_Append` will
lock the list before appending an item.

.. _PyDict_Next:

`PyDict_Next`
'''''''''''''''

A notable exception is :c`PyDict_Next`, which does not lock the
dictionary.  You should use :c`Py_BEGIN_CRITICAL_SECTION` to protect
the dictionary while iterating over it if the dictionary may be concurrently
modified::

    Py_BEGIN_CRITICAL_SECTION(dict);
    PyObject *key, *value;
    Py_ssize_t pos = 0;
    while (PyDict_Next(dict, &pos, &key, &value)) {
        ...
    }
    Py_END_CRITICAL_SECTION();

**Borrowed References**

.. _borrowed-references:

Some C API functions return `borrowed references`.
These APIs are not thread-safe if the containing object is modified
concurrently.  For example, it's not safe to use :c`PyList_GetItem`
if the list may be modified concurrently.

The following table lists some borrowed reference APIs and their replacements
that return `strong references`.

+-----------------------------------+-----------------------------------+
 Borrowed reference API             Strong reference API              
+===================================+===================================+
 :c`PyList_GetItem`           :c`PyList_GetItemRef`       
+-----------------------------------+-----------------------------------+
 :c`PyList_GET_ITEM`          :c`PyList_GetItemRef`       
+-----------------------------------+-----------------------------------+
 :c`PyDict_GetItem`           :c`PyDict_GetItemRef`       
+-----------------------------------+-----------------------------------+
 :c`PyDict_GetItemWithError`  :c`PyDict_GetItemRef`       
+-----------------------------------+-----------------------------------+
 :c`PyDict_GetItemString`     :c`PyDict_GetItemStringRef` 
+-----------------------------------+-----------------------------------+
 :c`PyDict_SetDefault`        :c`PyDict_SetDefaultRef`    
+-----------------------------------+-----------------------------------+
 :c`PyDict_Next`              none (see `PyDict_Next`)     
+-----------------------------------+-----------------------------------+
 :c`PyWeakref_GetObject`     :c`PyWeakref_GetRef`        
+-----------------------------------+-----------------------------------+
 :c`PyWeakref_GET_OBJECT`    :c`PyWeakref_GetRef`        
+-----------------------------------+-----------------------------------+
 :c`PyImport_AddModule`       :c`PyImport_AddModuleRef`   
+-----------------------------------+-----------------------------------+
 :c`PyCell_GET`               :c`PyCell_Get`              
+-----------------------------------+-----------------------------------+

Not all APIs that return borrowed references are problematic.  For
example, :c`PyTuple_GetItem` is safe because tuples are immutable.
Similarly, not all uses of the above APIs are problematic.  For example,
:c`PyDict_GetItem` is often used for parsing keyword argument
dictionaries in function calls; those keyword argument dictionaries are
effectively private (not accessible by other threads), so using borrowed
references in that context is safe.

Some of these functions were added in Python 3.13.  You can use the
[pythoncapi-compat](https://github.com/python/pythoncapi-compat) package
to provide implementations of these functions for older Python versions.

.. _free-threaded-memory-allocation:

**Memory Allocation APIs**

Python's memory management C API provides functions in three different
`allocation domains`: "raw", "mem", and "object".
For thread-safety, the free-threaded build requires that only Python objects
are allocated using the object domain, and that all Python objects are
allocated using that domain.  This differs from the prior Python versions,
where this was only a best practice and not a hard requirement.

> **Note**
>
> Search for uses of :c`PyObject_Malloc` in your
> extension and check that the allocated memory is used for Python objects.
> Use :c`PyMem_Malloc` to allocate buffers instead of
> :c`PyObject_Malloc`.
>

**Thread State and GIL APIs**

Python provides a set of functions and macros to manage thread state and the
GIL, such as:

* :c`PyThreadState_Ensure`, :c`PyThreadState_EnsureFromView`,
  and :c`PyThreadState_Release`
* :c`PyGILState_Ensure` and :c`PyGILState_Release`
* :c`PyEval_SaveThread` and :c`PyEval_RestoreThread`
* :c`Py_BEGIN_ALLOW_THREADS` and :c`Py_END_ALLOW_THREADS`

These functions should still be used in the free-threaded build to manage
thread state even when the `GIL` is disabled.  For example, if you
create a thread outside of Python, you must call :c`PyThreadState_Ensure`
before calling into the Python API to ensure that the thread has a valid
Python thread state.

You should continue to call :c`PyEval_SaveThread` or
:c`Py_BEGIN_ALLOW_THREADS` around blocking operations, such as I/O or
lock acquisitions, to allow other threads to run the
`cyclic garbage collector`.

**Protecting Internal Extension State**

Your extension may have internal state that was previously protected by the
GIL.  You may need to add locking to protect this state.  The approach will
depend on your extension, but some common patterns include:

* **Caches**: global caches are a common source of shared state.  Consider
  using a lock to protect the cache or disabling it in the free-threaded build
  if the cache is not critical for performance.
* **Global State**: global state may need to be protected by a lock or moved
  to thread local storage. C11 and C++11 provide the `thread_local` or
  `_Thread_local` for
  [thread-local storage](https://en.cppreference.com/w/c/language/storage_duration).

**Critical Sections**

.. _critical-sections:

In the free-threaded build, CPython provides a mechanism called "critical
sections" to protect data that would otherwise be protected by the GIL.
While extension authors may not interact with the internal critical section
implementation directly, understanding their behavior is crucial when using
certain C API functions or managing shared state in the free-threaded build.

What Are Critical Sections?
...........................

Conceptually, critical sections act as a deadlock avoidance layer built on
top of simple mutexes. Each thread maintains a stack of active critical
sections. When a thread needs to acquire a lock associated with a critical
section (e.g., implicitly when calling a thread-safe C API function like
:c`PyDict_SetItem`, or explicitly using macros), it attempts to acquire
the underlying mutex.

Using Critical Sections
.......................

使用临界区的主要 API 有：

* :c`Py_BEGIN_CRITICAL_SECTION` and :c`Py_END_CRITICAL_SECTION` -
  For locking a single object

* :c`Py_BEGIN_CRITICAL_SECTION2` and :c`Py_END_CRITICAL_SECTION2`
  - For locking two objects simultaneously

These macros must be used in matching pairs and must appear in the same C
scope, since they establish a new local scope.  These macros are no-ops in
non-free-threaded builds, so they can be safely added to code that needs to
support both build types.

A common use of a critical section would be to lock an object while accessing
an internal attribute of it.  For example, if an extension type has an internal
count field, you could use a critical section while reading or writing that
field::

    // read the count, returns new reference to internal count value
    PyObject *result;
    Py_BEGIN_CRITICAL_SECTION(obj);
    result = Py_NewRef(obj->count);
    Py_END_CRITICAL_SECTION();
    return result;

    // write the count, consumes reference from new_count
    Py_BEGIN_CRITICAL_SECTION(obj);
    obj->count = new_count;
    Py_END_CRITICAL_SECTION();

How Critical Sections Work
..........................

Unlike traditional locks, critical sections do not guarantee exclusive access
throughout their entire duration. If a thread would block while holding a
critical section (e.g., by acquiring another lock or performing I/O), the
critical section is temporarily suspended—all locks are released—and then
resumed when the blocking operation completes.

This behavior is similar to what happens with the GIL when a thread makes a
blocking call. The key differences are:

* Critical sections operate on a per-object basis rather than globally

* Critical sections follow a stack discipline within each thread (the "begin" and
  "end" macros enforce this since they must be paired and within the same scope)

* Critical sections automatically release and reacquire locks around potential
  blocking operations

Deadlock Avoidance
..................

临界区通过两种方式帮助避免死锁：

1. If a thread tries to acquire a lock that's already held by another thread,
   it first suspends all of its active critical sections, temporarily releasing
   their locks

2. When the blocking operation completes, only the top-most critical section is
   reacquired first

This means you cannot rely on nested critical sections to lock multiple objects
at once, as the inner critical section may suspend the outer ones. Instead, use
:c`Py_BEGIN_CRITICAL_SECTION2` to lock two objects simultaneously.

Note that the locks described above are only :c`PyMutex` based locks.
The critical section implementation does not know about or affect other locking
mechanisms that might be in use, like POSIX mutexes.  Also note that while
blocking on any :c`PyMutex` causes the critical sections to be
suspended, only the mutexes that are part of the critical sections are
released.  If :c`PyMutex` is used without a critical section, it will
not be released and therefore does not get the same deadlock avoidance.

Important Considerations
........................

* Critical sections may temporarily release their locks, allowing other threads
  to modify the protected data. Be careful about making assumptions about the
  state of the data after operations that might block.

* Because locks can be temporarily released (suspended), entering a critical
  section does not guarantee exclusive access to the protected resource
  throughout the section's duration. If code within a critical section calls
  another function that blocks (e.g., acquires another lock, performs blocking
  I/O), all locks held by the thread via critical sections will be released.
  This is similar to how the GIL can be released during blocking calls.

* Only the lock(s) associated with the most recently entered (top-most)
  critical section are guaranteed to be held at any given time. Locks for
  outer, nested critical sections might have been suspended.

* You can lock at most two objects simultaneously with these APIs. If you need
  to lock more objects, you'll need to restructure your code.

* While critical sections will not deadlock if you attempt to lock the same
  object twice, they are less efficient than purpose-built reentrant locks for
  this use case.

* When using :c`Py_BEGIN_CRITICAL_SECTION2`, the order of the objects
  doesn't affect correctness (the implementation handles deadlock avoidance),
  but it's good practice to always lock objects in a consistent order.

* Remember that the critical section macros are primarily for protecting access
  to *Python objects* that might be involved in internal CPython operations
  susceptible to the deadlock scenarios described above. For protecting purely
  internal extension state, standard mutexes or other synchronization
  primitives might be more appropriate.

.. _per-object-locks:

Per-Object Locks (`ob_mutex`)
...............................

In the free-threaded build, each Python object contains a :c`~PyObject.ob_mutex`
field of type :c`PyMutex`.  This mutex is **reserved for use by the
critical section API** (:c`Py_BEGIN_CRITICAL_SECTION` /
:c`Py_END_CRITICAL_SECTION`).

> **Warning**
>
> Do **not** lock `ob_mutex` directly with `PyMutex_Lock(&obj->ob_mutex)`.
> Mixing direct `PyMutex_Lock` calls with the critical section API on the
> same mutex can cause deadlocks.
>

Even if your own code never uses critical sections on a particular object type,
**CPython internals may use the critical section API on any Python object**.

If your extension type needs its own lock, add a separate :c`PyMutex`
field (or another synchronization primitive) to your object struct.
:c`PyMutex` is very lightweight, so there is negligible cost to having
an additional one.

**Building Extensions for the Free-Threaded Build**

C API extensions need to be built specifically for the free-threaded build.
The wheels, shared libraries, and binaries are indicated by a `t` suffix.

* [pypa/manylinux](https://github.com/pypa/manylinux) supports the
  free-threaded build, with the `t` suffix, such as `python3.14t`.
* [pypa/cibuildwheel](https://github.com/pypa/cibuildwheel) supports
  building wheels for the free-threaded build of Python 3.14 and newer.

Limited C API and Stable ABI
............................

The free-threaded build does not currently support the
`Limited C API` or the stable ABI.  If you use
[setuptools](https://setuptools.pypa.io/en/latest/setuptools.html) to build
your extension and currently set `py_limited_api=True` you can use
`py_limited_api=not sysconfig.get_config_var("Py_GIL_DISABLED")` to opt out
of the limited API when building with the free-threaded build.

> **Note**
>
> You will need to build separate wheels specifically for the free-threaded
> build.  If you currently use the stable ABI, you can continue to build a
> single wheel for multiple non-free-threaded Python versions.
>

Windows
.......

Due to a limitation of the official Windows installer, you will need to
manually define `Py_GIL_DISABLED=1` when building extensions from source.

> **Seealso**
>
> `Porting Extension Modules to Support Free-Threading
> <https://py-free-threading.github.io/porting/>`_:
> A community-maintained porting guide for extension authors.
>
