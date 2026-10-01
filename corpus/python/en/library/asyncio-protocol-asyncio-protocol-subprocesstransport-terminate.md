---
id: "python-en-function-asyncio-protocol-subprocesstransport-terminate"
language: "python"
lang: "en"
category: "function"
name: "SubprocessTransport.terminate"
signature: "SubprocessTransport.terminate()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.SubprocessTransport.terminate"
license: "PSF"
updated: "2026-10-01"
---

# SubprocessTransport.terminate

Stop the subprocess.

On POSIX systems, this method sends :py`~signal.SIGTERM` to the subprocess.
On Windows, the Windows API function :c`TerminateProcess` is called to
stop the subprocess.

See also `subprocess.Popen.terminate`.
