---
id: "python-en-function-asyncio-eventloop-stdin-subprocess-pipe-stdout-subprocess-pipe"
language: "python"
lang: "en"
category: "function"
name: "stdin=subprocess.PIPE, stdout=subprocess.PIPE, \\"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.stdin=subprocess.PIPE, stdout=subprocess.PIPE, \\"
license: "PSF"
updated: "2026-10-01"
---

# stdin=subprocess.PIPE, stdout=subprocess.PIPE, \

Create a subprocess from one or more string arguments specified by
*args*.

*args* must be a list of strings represented by:

* `str`;
* or `bytes`, encoded to the
  `filesystem encoding`.

The first string specifies the program executable,
and the remaining strings specify the arguments.  Together, string
arguments form the `argv` of the program.

This is similar to the standard library `subprocess.Popen`
class called with `shell=False` and the list of strings passed as
the first argument; however, where `~subprocess.Popen` takes
a single argument which is list of strings, *subprocess_exec*
takes multiple string arguments.

The *protocol_factory* must be a callable returning a subclass of the
`asyncio.SubprocessProtocol` class.

Other parameters:

* *stdin* can be any of these:

  * a file-like object
  * an existing file descriptor (a positive integer), for example those created with `os.pipe`
  * the `subprocess.PIPE` constant (default) which will create a new
    pipe and connect it,
  * the value `None` which will make the subprocess inherit the file
    descriptor from this process
  * the `subprocess.DEVNULL` constant which indicates that the
    special `os.devnull` file will be used

* *stdout* can be any of these:

  * a file-like object
  * the `subprocess.PIPE` constant (default) which will create a new
    pipe and connect it,
  * the value `None` which will make the subprocess inherit the file
    descriptor from this process
  * the `subprocess.DEVNULL` constant which indicates that the
    special `os.devnull` file will be used

* *stderr* can be any of these:

  * a file-like object
  * the `subprocess.PIPE` constant (default) which will create a new
    pipe and connect it,
  * the value `None` which will make the subprocess inherit the file
    descriptor from this process
  * the `subprocess.DEVNULL` constant which indicates that the
    special `os.devnull` file will be used
  * the `subprocess.STDOUT` constant which will connect the standard
    error stream to the process' standard output stream

* All other keyword arguments are passed to `subprocess.Popen`
  without interpretation, except for *bufsize*, *universal_newlines*,
  *shell*, *text*, *encoding* and *errors*, which should not be specified
  at all.

  The `asyncio` subprocess API does not support decoding the streams
  as text. `bytes.decode` can be used to convert the bytes returned
  from the stream to text.

If a file-like object passed as *stdin*, *stdout* or *stderr* represents a
pipe, then the other side of this pipe should be registered with
`~loop.connect_write_pipe` or `~loop.connect_read_pipe` for use
with the event loop.

See the constructor of the `subprocess.Popen` class
for documentation on other arguments.

Returns a pair of `(transport, protocol)`, where *transport*
conforms to the `asyncio.SubprocessTransport` base class and
*protocol* is an object instantiated by the *protocol_factory*.

If the transport is closed or is garbage collected, the child process
is killed if it is still running.
