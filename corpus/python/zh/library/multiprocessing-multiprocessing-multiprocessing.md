---
id: "python-zh-function-multiprocessing-multiprocessing"
language: "python"
lang: "zh"
category: "function"
name: "multiprocessing"
title: "Programming guidelines"
directive: "module"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#module-multiprocessing"
license: "PSF"
updated: "2026-10-01"
---

# Programming guidelines

.. _multiprocessing-programming:

**Programming guidelines**

There are certain guidelines and idioms which should be adhered to when using
`multiprocessing`.

**All start methods**

下面这些适用于所有启动方法。

避免共享状态

    As far as possible one should try to avoid shifting large amounts of data
    between processes.

    It is probably best to stick to using queues or pipes for communication
    between processes rather than using the lower level synchronization
    primitives.

可序列化

    Ensure that the arguments to the methods of proxies are picklable.

代理的线程安全性

    Do not use a proxy object from more than one thread unless you protect it
    with a lock.

    (There is never a problem with different processes using the *same* proxy.)

使用 Join 避免僵尸进程

    On POSIX when a process finishes but has not been joined it becomes a zombie.
    There should never be very many because each time a new process starts (or
    `~multiprocessing.active_children` is called) all completed processes
    which have not yet been joined will be joined.  Also calling a finished
    process's `Process.is_alive` will
    join the process.  Even so it is probably good
    practice to explicitly join all the processes that you start.

继承优于序列化、反序列化

    When using the *spawn* or *forkserver* start methods many types
    from `multiprocessing` need to be picklable so that child
    processes can use them.  However, one should generally avoid
    sending shared objects to other processes using pipes or queues.
    Instead you should arrange the program so that a process which
    needs access to a shared resource created elsewhere can inherit it
    from an ancestor process.

避免杀死进程

    Using the `Process.terminate`
    method to stop a process is liable to
    cause any shared resources (such as locks, semaphores, pipes and queues)
    currently being used by the process to become broken or unavailable to other
    processes.

    Therefore it is probably best to only consider using
    `Process.terminate` on processes
    which never use any shared resources.

Join 使用队列的进程

    Bear in mind that a process that has put items in a queue will wait before
    terminating until all the buffered items are fed by the "feeder" thread to
    the underlying pipe.  (The child process can call the
    `Queue.cancel_join_thread`
    method of the queue to avoid this behaviour.)

    This means that whenever you use a queue you need to make sure that all
    items which have been put on the queue will eventually be removed before the
    process is joined.  Otherwise you cannot be sure that processes which have
    put items on the queue will terminate.  Remember also that non-daemonic
    processes will be joined automatically.

    An example which will deadlock is the following::

        from multiprocessing import Process, Queue

        def f(q):
            q.put('X' * 1000000)

        if __name__ == '__main__':
            queue = Queue()
            p = Process(target=f, args=(queue,))
            p.start()
            p.join()                    # this deadlocks
            obj = queue.get()

    A fix here would be to swap the last two lines (or simply remove the
    `p.join()` line).

显式传递资源给子进程

    On POSIX using the *fork* start method, a child process can make
    use of a shared resource created in a parent process using a
    global resource.  However, it is better to pass the object as an
    argument to the constructor for the child process.

    Apart from making the code (potentially) compatible with Windows
    and the other start methods this also ensures that as long as the
    child process is still alive the object will not be garbage
    collected in the parent process.  This might be important if some
    resource is freed when the object is garbage collected in the
    parent process.

    So for instance ::

        from multiprocessing import Process, Lock

        def f():
            ... do something using "lock" ...

        if __name__ == '__main__':
            lock = Lock()
            for i in range(10):
                Process(target=f).start()

    should be rewritten as ::

        from multiprocessing import Process, Lock

        def f(l):
            ... do something using "l" ...

        if __name__ == '__main__':
            lock = Lock()
            for i in range(10):
                Process(target=f, args=(lock,)).start()

谨防将 :data:`sys.stdin` 数据替换为 “类似文件的对象”

    `multiprocessing` originally unconditionally called::

        os.close(sys.stdin.fileno())

    in the `multiprocessing.Process._bootstrap` method --- this resulted
    in issues with processes-in-processes. This has been changed to::

        sys.stdin.close()
        sys.stdin = open(os.open(os.devnull, os.O_RDONLY), closefd=False)

    Which solves the fundamental issue of processes colliding with each other
    resulting in a bad file descriptor error, but introduces a potential danger
    to applications which replace `sys.stdin` with a "file-like object"
    with output buffering.  This danger is that if multiple processes call
    `~io.IOBase.close` on this file-like object, it could result in the same
    data being flushed to the object multiple times, resulting in corruption.

    If you write a file-like object and implement your own caching, you can
    make it fork-safe by storing the pid whenever you append to the cache,
    and discarding the cache when the pid changes. For example::

       @property
       def cache(self):
           pid = os.getpid()
           if pid != self._pid:
               self._pid = pid
               self._cache = []
           return self._cache

    For more information, see `5155`, `5313` and `5331`

.. _multiprocessing-programming-spawn:
.. _multiprocessing-programming-forkserver:

**The *spawn* and *forkserver* start methods**

There are a few extra restrictions which don't apply to the *fork*
start method.

更依赖序列化

    Ensure that all arguments to `~multiprocessing.Process` are
    picklable.  Also, if you subclass `Process.__init__`, you must make sure
    that instances will be picklable when the
    `Process.start` method is called.

全局变量

    Bear in mind that if code run in a child process tries to access a global
    variable, then the value it sees (if any) may not be the same as the value
    in the parent process at the time that `Process.start` was called.

    However, global variables which are just module level constants cause no
    problems.

.. _multiprocessing-safe-main-import:

安全导入主模块

    Make sure that the main module can be safely imported by a new Python
    interpreter without causing unintended side effects (such as starting a new
    process).

    For example, using the *spawn* or *forkserver* start method
    running the following module would fail with a
    `RuntimeError`::

        from multiprocessing import Process

        def foo():
            print('hello')

        p = Process(target=foo)
        p.start()

    Instead one should protect the "entry point" of the program by using `if
    __name__ == '__main__':` as follows::

       from multiprocessing import Process, freeze_support, set_start_method

       def foo():
           print('hello')

       if __name__ == '__main__':
           freeze_support()
           set_start_method('spawn')
           p = Process(target=foo)
           p.start()

    (The `freeze_support()` line can be omitted if the program will be run
    normally instead of frozen.)

    This allows the newly spawned Python interpreter to safely import the module
    and then run the module's `foo()` function.

    Similar restrictions apply if a pool or manager is created in the main
    module.

.. _multiprocessing-examples:

**Examples**

创建和使用自定义管理器、代理的示例：

literalinclude:: ../includes/mp_newtype.py

使用 :class:`~multiprocessing.pool.Pool`:

literalinclude:: ../includes/mp_pool.py

An example showing how to use queues to feed tasks to a collection of worker
processes and collect the results:

literalinclude:: ../includes/mp_workers.py
