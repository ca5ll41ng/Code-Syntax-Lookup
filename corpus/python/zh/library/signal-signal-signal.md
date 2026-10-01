---
id: "python-zh-function-signal-signal"
language: "python"
lang: "zh"
category: "function"
name: "signal"
title: "Examples"
directive: "module"
module: "signal"
source_url: "https://docs.python.org/zh-cn/3/library/signal.html#module-signal"
license: "PSF"
updated: "2026-10-01"
---

# Examples

.. _signal-example:

**Examples**

Here is a minimal example program. It uses the `alarm` function to limit
the time spent waiting to open a file; this is useful if the file is for a
serial device that may not be turned on, which would normally cause the
`os.open` to hang indefinitely.  The solution is to set a 5-second alarm
before opening the file; if the operation takes too long, the alarm signal will
be sent, and the handler raises an exception. ::

   import signal, os

   def handler(signum, frame):
       signame = signal.Signals(signum).name
       print(f'Signal handler called with signal {signame} ({signum})')
       raise OSError("Couldn't open device!")

   # Set the signal handler and a 5-second alarm
   signal.signal(signal.SIGALRM, handler)
   signal.alarm(5)

   # This open() may hang indefinitely
   fd = os.open('/dev/ttyS0', os.O_RDWR)

   signal.alarm(0)          # Disable the alarm

**Note on SIGPIPE**

Piping output of your program to tools like `head(1)` will
cause a `SIGPIPE` signal to be sent to your process when the receiver
of its standard output closes early.  This results in an exception
like `BrokenPipeError: [Errno 32] Broken pipe`.  To handle this
case, wrap your entry point to catch this exception as follows::

    import os
    import sys

    def main():
        try:
            # simulate large output (your code replaces this loop)
            for x in range(10000):
                print("y")
            # flush output here to force SIGPIPE to be triggered
            # while inside this try block.
            sys.stdout.flush()
        except BrokenPipeError:
            # Python flushes standard streams on exit; redirect remaining output
            # to devnull to avoid another BrokenPipeError at shutdown
            devnull = os.open(os.devnull, os.O_WRONLY)
            os.dup2(devnull, sys.stdout.fileno())
            sys.exit(1)  # Python exits with error code 1 on EPIPE

    if __name__ == '__main__':
        main()

Do not set `SIGPIPE`'s disposition to `SIG_DFL` in
order to avoid `BrokenPipeError`.  Doing that would cause
your program to exit unexpectedly whenever any socket
connection is interrupted while your program is still writing to
it.

.. _handlers-and-exceptions:

**Note on Signal Handlers and Exceptions**

If a signal handler raises an exception, the exception will be propagated to
the main thread and may be raised after any `bytecode` instruction. Most
notably, a `KeyboardInterrupt` may appear at any point during execution.
Most Python code, including the standard library, cannot be made robust against
this, and so a `KeyboardInterrupt` (or any other exception resulting from
a signal handler) may on rare occasions put the program in an unexpected state.

为了展示这个问题，请考虑以下代码::

    class SpamContext:
        def __init__(self):
            self.lock = threading.Lock()

        def __enter__(self):
            # If KeyboardInterrupt occurs here, everything is fine
            self.lock.acquire()
            # If KeyboardInterrupt occurs here, __exit__ will not be called
            ...
            # KeyboardInterrupt could occur just before the function returns

        def __exit__(self, exc_type, exc_val, exc_tb):
            ...
            self.lock.release()

For many programs, especially those that merely want to exit on
`KeyboardInterrupt`, this is not a problem, but applications that are
complex or require high reliability should avoid raising exceptions from signal
handlers. They should also avoid catching `KeyboardInterrupt` as a means
of gracefully shutting down.  Instead, they should install their own
`SIGINT` handler. Below is an example of an HTTP server that avoids
`KeyboardInterrupt`::

    import signal
    import socket
    from selectors import DefaultSelector, EVENT_READ
    from http.server import HTTPServer, SimpleHTTPRequestHandler

    interrupt_read, interrupt_write = socket.socketpair()

    def handler(signum, frame):
        print('Signal handler called with signal', signum)
        interrupt_write.send(b'\0')
    signal.signal(signal.SIGINT, handler)

    def serve_forever(httpd):
        sel = DefaultSelector()
        sel.register(interrupt_read, EVENT_READ)
        sel.register(httpd, EVENT_READ)

        while True:
            for key, _ in sel.select():
                if key.fileobj == interrupt_read:
                    interrupt_read.recv(1)
                    return
                if key.fileobj == httpd:
                    httpd.handle_request()

    print("Serving on port 8000")
    httpd = HTTPServer(('', 8000), SimpleHTTPRequestHandler)
    serve_forever(httpd)
    print("Shutdown...")
