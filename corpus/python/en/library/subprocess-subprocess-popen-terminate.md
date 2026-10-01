---
id: "python-en-function-subprocess-popen-terminate"
language: "python"
lang: "en"
category: "function"
name: "Popen.terminate"
signature: "Popen.terminate()"
directive: "method"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.Popen.terminate"
license: "PSF"
updated: "2026-10-01"
---

# Popen.terminate

Stop the child. On POSIX OSs the method sends :py`~signal.SIGTERM` to the
child. On Windows the Win32 API function :c`TerminateProcess` is called
to stop the child.
