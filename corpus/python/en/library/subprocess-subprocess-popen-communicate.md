---
id: "python-en-function-subprocess-popen-communicate"
language: "python"
lang: "en"
category: "function"
name: "Popen.communicate"
signature: "Popen.communicate(input=None, timeout=None)"
directive: "method"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.Popen.communicate"
license: "PSF"
updated: "2026-10-01"
---

# Popen.communicate

Interact with process: Send data to stdin.  Read data from stdout and stderr,
until end-of-file is reached.  Wait for process to terminate and set the
`~Popen.returncode` attribute.  The optional *input* argument should be
data to be sent to the child process, or `None`, if no data should be sent
to the child.  If streams were opened in text mode, *input* must be a string.
Otherwise, it must be bytes.

`communicate` returns a tuple `(stdout_data, stderr_data)`.
The data will be strings if streams were opened in text mode; otherwise,
bytes.

Note that if you want to send data to the process's stdin, you need to create
the Popen object with `stdin=PIPE`.  Similarly, to get anything other than
`None` in the result tuple, you need to give `stdout=PIPE` and/or
`stderr=PIPE` too.

If the process does not terminate after *timeout* seconds, a
`TimeoutExpired` exception will be raised.  Catching this exception and
retrying communication will not lose any output.  Supplying *input* to a
subsequent post-timeout `communicate` call is in undefined behavior
and may become an error in the future.

The child process is not killed if the timeout expires, so in order to
cleanup properly a well-behaved application should kill the child process and
finish communication::

   proc = subprocess.Popen(...)
   try:
       outs, errs = proc.communicate(timeout=15)
   except TimeoutExpired:
       proc.kill()
       outs, errs = proc.communicate()

After a call to `~Popen.communicate` raises `TimeoutExpired`, do
not call `~Popen.wait`. Use an additional `~Popen.communicate`
call to finish handling pipes and populate the `~Popen.returncode`
attribute.

> **Note**
>
> The data read is buffered in memory, so do not use this method if the data
> size is large or unlimited.
>

> *Changed in 3.3*: *timeout* was added.
